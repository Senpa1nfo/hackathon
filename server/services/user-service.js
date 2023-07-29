const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(name, email, password) {
        const candidate = await UserModel.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest(`Користувач із поштовою адресою ${email} вже існує`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const admin = false;
        const user = await UserModel.create({name, email, password: hashPassword, activationLink, admin});
        await mailService.SendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink});
        if (!user) {
            throw ApiError.BadRequest(`Некоректне посилання на активацію`);
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({email});
        if(!user) {
            throw ApiError.BadRequest(`Користувач з таким email не був знайдений`);
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Некоректний пароль');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async sendLink(email, activationLink) {
        return await mailService.SendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);   
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async updateProgress(userId, chapterPath, chapterProgress) {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error('Пользователь не найден');
        }

        const chapterIndex = user.progress.findIndex((chapter) => chapter.chapterPath === chapterPath);
        if (chapterIndex === -1) {
            user.progress.push({ chapterPath, chapterProgress });
        } else {
            user.progress[chapterIndex].chapterProgress = chapterProgress;
        }

        const updatedUser = await user.save();

        return updatedUser;
    }

    async updatePartProgress(userId, chapterPath, partPath, partProgress) {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error('Пользователь не найден');
        }
    
        const chapterIndex = user.progress.findIndex((chapter) => chapter.chapterPath === chapterPath);

        if (chapterIndex === -1) {
            user.progress.push({ chapterPath, chapterProgress: '0', parts: [{ partPath, partProgress }] });
        } else {
            const partIndex = user.progress[chapterIndex].parts.findIndex((part) => part.partPath === partPath);
            if (partIndex === -1) {
                user.progress[chapterIndex].parts.push({ partPath, partProgress });
            } else {
                user.progress[chapterIndex].parts[partIndex].partProgress = partProgress;
            }
        }
    
        const updatedUser = await user.save();
        return updatedUser;
    }
}

module.exports = new UserService();
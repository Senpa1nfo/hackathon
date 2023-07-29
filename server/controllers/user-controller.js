const UserService = require('../services/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Помилка під час валідації', errors.array()));
            }
            const {name, email, password} = req.body;
            const userData = await UserService.registration(name, email, password); 
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await UserService.login(email, password); 
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (error) {
            next(error);
        }
    }

    async sendLink(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.refresh(refreshToken); 

            const email = userData.user.email;
            const activationLink = userData.user.activationLink;

            await UserService.sendLink(email ,activationLink);
        } catch (error) {
            next(error);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.refresh(refreshToken); 
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async updateProgress(req, res, next) {
        try {
            const { _id, chapterProgress } = req.body;
            const chapterPath = req.params.chapterPath;
            const item = await UserService.updateProgress(_id, chapterPath, chapterProgress);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async updatePartProgress(req, res, next) {
        try {
            const { _id, partProgress } = req.body;
            const chapterPath = req.params.chapterPath;
            const partPath = req.params.partPath;
            const item = await UserService.updatePartProgress(_id, chapterPath, partPath, partProgress);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
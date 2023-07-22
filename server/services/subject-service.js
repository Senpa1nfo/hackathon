const SubjectModel = require('../models/subject-model');

class SubjectService {
    async getAll() {
        const item = await SubjectModel.find();
        return item;
    }

    async getOne(path) {
        const item = await SubjectModel.findOne({ path });
        return item;
    }

    async edit(path, title, lessons) {
        const item = await SubjectModel.findOneAndUpdate({ path }, { title, lessons } , {
            new: true,
            upsert: true
        });
        return item;
    }

    async updateProgress(path, progress) {
        const item = await SubjectModel.findOneAndUpdate({ path }, { progress } , {
            new: true,
            upsert: true
        });
        return item;
    }

    async create(path, title, lessons) {
        const subject = await SubjectModel.findOne({ path });
        if (subject) {
            return 'Тема с таким путём уже существует!';
        }
        const item = await SubjectModel.create({ path, title, lessons });
        return item;
    }

    async remove(path) {
        const item = await SubjectModel.deleteOne({ path });
        return item;
    }
}

module.exports = new SubjectService();
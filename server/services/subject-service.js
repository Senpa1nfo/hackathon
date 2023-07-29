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

    async create(path, chapter) {
        const subject = await SubjectModel.findOne({ path });
        if (subject) {
            return 'Тема с таким путём уже существует!';
        }
        const {grade, title, progress, paragraphs} = chapter;
        const item = await SubjectModel.create({path, grade, title, progress, paragraphs});
        return item;
    }

    async edit(path, title, paragraphs) {
        const item = await SubjectModel.findOneAndUpdate({ path }, { title, paragraphs } , {
            new: true,
            upsert: true
        });
        return item;
    }

    async remove(path) {
        const item = await SubjectModel.deleteOne({ path });
        return item;
    }
}

module.exports = new SubjectService();
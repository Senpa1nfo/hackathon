const TestModel = require('../models/test-model');

class TestService {
    async getAll() {
        const item = await TestModel.find();
        return item;
    }

    async getOne(path) {
        const item = await TestModel.findOne({ path });
        return item;
    }

    async edit(path, text) {
        const item = await TestModel.findOneAndUpdate({ path }, { text } , {
            new: true,
            upsert: true
        });
        return item;
    }

    async create(path, text) {
        const test = await TestModel.findOne({ path });
        if (test) {
            return 'Тест с таким путём уже существует!';
        }
        const item = await TestModel.create({ path, text });
        return item;
    }

    async remove(path) {
        const item = await TestModel.deleteOne({ path });
        return item;
    }
}

module.exports = new TestService();
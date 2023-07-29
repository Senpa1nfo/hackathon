const TestModel = require('../models/test-model');

class TestService {
    async getAll() {
        const item = await TestModel.find();
        return item;
    }

    async getOne(subject, part) {
        const item = await TestModel.findOne({subject, part});
        return item;
    }
    
    async create(subject, part, correct, questions) {
        const test = await TestModel.findOne({subject, part});
        if (test) {
            return 'Тест с таким путём уже существует!';
        }
        const item = await TestModel.create({subject, part, correct, questions});
        return item;
    }

    async edit(subject, correct, questions) {
        const item = await TestModel.findOneAndUpdate({subject, part}, {questions, correct} , {
            new: true,
            upsert: true
        });
        return item;
    }

    async remove(subject, part) {
        const item = await TestModel.deleteOne({subject, part});
        return item;
    }
}

module.exports = new TestService();
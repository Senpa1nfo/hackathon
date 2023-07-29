const TestService = require('../services/test-service');

class TestController {
    async getAll(req, res, next) {
        try {
            const item = await TestService.getAll();
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const subject = req.params.subject;
            const part = req.params.part;
            const item = await TestService.getOne(subject, part);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const subject = req.params.subject;
            const part = req.params.part;
            const { correct, questions } = req.body;
            const item = await TestService.create((subject), part, correct, questions);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            const subject = req.params.subject;
            const part = req.params.part;
            const { correct, questions } = req.body;
            const item = await TestService.edit(subject, part, correct, questions);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const subject = req.params.subject;
            const part = req.params.part;
            const item = await TestService.remove(subject, part);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TestController();
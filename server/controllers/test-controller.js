const TestModel = require('../models/test-model');
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
            const path = req.params.path;
            const item = await TestService.getOne(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            const { text } = req.body;
            const path = req.params.path;
            const item = await TestService.edit(path, text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const path = req.params.path;
            const { text } = req.body;
            const item = await TestService.create(String(path).toLocaleLowerCase(), text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const path = req.params.path;
            const item = await TestService.remove(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TestController();
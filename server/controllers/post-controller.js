const PostModel = require('../models/post-model');
const PostService = require('../services/post-service');

class PostController {
    async getAll(req, res, next) {
        try {
            const item = await PostService.getAll();
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const path = req.params.path;
            const item = await PostService.getOne(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            const { text } = req.body;
            const path = req.params.path;
            const item = await PostService.edit(path, text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const path = req.params.path;
            const { text } = req.body;
            const item = await PostService.create(path, text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const path = req.params.path;
            const item = await PostService.remove(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PostController();
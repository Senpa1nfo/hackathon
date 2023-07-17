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
            const id = req.params.id;
            const item = await PostService.getOne(id);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            const { text } = req.body;
            const id = req.params.id;
            const item = await PostService.edit(id, text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const { id, text } = req.body;
            const item = await PostService.create(id, text);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const id = req.params.id;
            const item = await PostService.remove(id);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PostController();
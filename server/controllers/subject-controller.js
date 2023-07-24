const SubjectService = require('../services/subject-service');

class SubjectController {
    async getAll(req, res, next) {
        try {
            const item = await SubjectService.getAll();
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const path = req.params.path;
            const item = await SubjectService.getOne(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const path = req.params.path;
            const { chapter } = req.body;
            const item = await SubjectService.create(String(path).toLocaleLowerCase(), chapter);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            const { chapter } = req.body;
            const path = req.params.path;
            const item = await SubjectService.edit(path, chapter);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async updateProgress(req, res, next) {
        try {
            const { progress } = req.body;
            const path = req.params.path;
            const item = await SubjectService.updateProgress(path, progress);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const path = req.params.path;
            const item = await SubjectService.remove(path);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new SubjectController();
const PostModel = require('../models/post-model');



class PostService {
    async getAll() {
        const item = await PostModel.find();
        return item;
    }

    async getOne(id) {
        const item = await PostModel.findOne({ "id": id });
        return item;
    }

    async edit(id, text) {
        const item = await PostModel.findOneAndUpdate({ "id": id, text }, {
            new: true,
            upsert: true
        });
        return item;
    }

    async create(id, text) {
        const item = await PostModel.create({ "id": id, text });
        return item;
    }

    async remove(id) {
        const item = await PostModel.deleteOne({ "id": id });
        return item;
    }
}

module.exports = new PostService();
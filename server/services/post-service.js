const PostModel = require('../models/post-model');

class PostService {
    async getAll() {
        const item = await PostModel.find();
        return item;
    }

    async getOne(path) {
        const item = await PostModel.findOne({ path });
        return item;
    }

    async edit(path, text) {
        const item = await PostModel.findOneAndUpdate({ path }, { text } , {
            new: true,
            upsert: true
        });
        return item;
    }

    async create(path, text) {
        const post = await PostModel.findOne({ path });
        if (post) {
            return 'Пост с таким путём уже существует!';
        }
        const item = await PostModel.create({ path, text });
        return item;
    }

    async remove(path) {
        const item = await PostModel.deleteOne({ path });
        return item;
    }
}

module.exports = new PostService();
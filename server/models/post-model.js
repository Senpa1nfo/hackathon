const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    path: { type: String, unique: true, required: true},
    text: { type: String, required: true },
})

module.exports = model('Post', PostSchema);
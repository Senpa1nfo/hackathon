const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    // type: { type: String, required: true },
    // img: { type: String, required: true },
    // title: { type: String, required: true },
    // subtitle: { type: String, required: true },
    text: { type: String, required: true },
})

module.exports = model('Post', PostSchema);
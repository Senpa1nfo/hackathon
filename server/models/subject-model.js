const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    title: { type: String},
    text: {type: String}
})

const ParagraphSchema = new Schema({
    title: { type: String},
    progress: {type: String, default: 0},
    articles: [ArticleSchema]
})

const SubjectSchema = new Schema({
    path: { type: String, unique: true, required: true},
    grade: { type: String, required: true },
    title: { type: String, required: true },
    progress: { type: String, default: "0"},
    paragraphs: [ParagraphSchema]
})

module.exports = model('Subject', SubjectSchema);
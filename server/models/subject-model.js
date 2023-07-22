const { Schema, model } = require('mongoose');

const SubjectSchema = new Schema({
    path: { type: String, unique: true, required: true},
    title: { type: String, required: true },
    progress: { type: String, default: "0"},
    lessons: { 
        type: Map, 
        of: String
    }
})

module.exports = model('Subject', SubjectSchema);
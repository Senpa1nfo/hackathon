const { Schema, model } = require('mongoose');

const TestQA = new Schema({
    title: {type: String, required: true},
    correct: {type: String, required: true},
    answers: {type: [String], required: true}
})

const TestSchema = new Schema({
    subject: {type: String, required: true},
    part: {type: String, required: true},
    questions: [TestQA]
})

module.exports = model('Test', TestSchema);
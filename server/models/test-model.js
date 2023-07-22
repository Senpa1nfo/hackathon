const { Schema, model } = require('mongoose');

const TestSchema = new Schema({
    path: { type: String, unique: true, required: true},
    text: { type: String, required: true },
})

module.exports = model('Test', TestSchema);
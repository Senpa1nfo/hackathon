const {Schema, model} = require('mongoose');

const progressPartSchema = new Schema({
    partPath: {type: String},
    partProgress: {type: String, default: '0'},
})

const progressSchema = new Schema({
    chapterPath: {type: String},
    chapterProgress: {type: String, default: '0'},
    parts: [progressPartSchema]
})

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    admin: {type: Boolean, default: false},
    progress: [progressSchema]
})

module.exports = model('User', UserSchema);
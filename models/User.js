const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true
    },
    job: {
        type: String,
        default: null
    },
    company: {
        type: String,
        default: null
    },
    university: {
        type: String,
        default: null
    },
    major: {
        type: String,
        default: null
    }
});

module.exports = User = mongoose.model('users', UserSchema);
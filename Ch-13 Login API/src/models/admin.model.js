const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    create_at: {
        type: String,
        required: true
    },
    update_at: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Admin', adminSchema, 'Admin');
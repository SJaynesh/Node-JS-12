const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    hobby: Array,
    city: String
});

const userModel = mongoose.model("Users", userSchema, "Users");

module.exports = userModel;
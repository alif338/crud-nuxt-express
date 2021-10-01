const mongoose = require("mongoose");

exports.User = mongoose.model('user', new mongoose.Schema({
    name: String,
    email: String,
    password: String
}))
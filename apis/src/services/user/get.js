const {User} = require("../../models/user")

exports.all = async () => User.find({}) // built-in dari mongodb model

exports.byId = async (id) => User.findById(id)  // built-in dari mongodb model




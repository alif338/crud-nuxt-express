const {User} = require("../../models/user")

exports.byId = async (id, user) => User.findByIdAndUpdate(id, user)  // built-in dari mongodb model

const {User} = require("../../models/user")

exports.byId = async (id) => User.findByIdAndDelete(id)  // built-in dari mongodb model

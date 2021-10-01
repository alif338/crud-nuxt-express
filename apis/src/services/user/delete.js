const {User} = require("../../models/user")

exports.byId = async (id) => User.findByIdAndDelete(id)
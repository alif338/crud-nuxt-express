const {User} = require("../../models/user")

exports.create = async (user) => User.create(user)
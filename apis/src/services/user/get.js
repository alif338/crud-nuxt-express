const {User} = require("../../models/user")

exports.all = async () => User.find({})

exports.byId = async (id) => User.findById(id)



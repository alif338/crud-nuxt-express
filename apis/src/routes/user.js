const express = require("express")
const userController = require('../controllers/user')
const User = express.Router()

User.get('/', userController.fetchUsers)

User.get('/:id', userController.fetchUser)
User.post('/', userController.createUser)
User.put('/:id', userController.updateUser)
User.delete('/:id', userController.deleteUser)

module.exports = User
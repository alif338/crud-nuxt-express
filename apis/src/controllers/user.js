
const getUserService = require('../services/user/get')
const putUserService = require('../services/user/put')
const postUserService = require('../services/user/post')
const deleteUserService = require('../services/user/delete')

exports.fetchUsers = async (req, res) => {
    try {
        res.status(200).json((await getUserService.all()))
    } catch(e) {
        res.status(500).json(e)
    }
}

exports.fetchUser = async (req, res) => {
    try {
        res.status(200).json((await getUserService.byId(req.params.id)))
    } catch(e) {
        res.status(500).json(e)
    }
}

exports.createUser = async (req, res) => {
    try {
        const {
            name, 
            email,
            password
        } = req.body
        console.log(req.body)
        res.status(201).json((await postUserService.create({
            name, 
            email,
            password
        })))
    } catch(e) {
        res.status(500).json(e)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {
            name, 
            email,
            password
        } = req.body
        console.log(req.body)
        res.status(201).json((await putUserService.byId(req.params.id, {
            name, 
            email,
            password
        })))
    } catch(e) {
        res.status(500).json(e)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        res.status(200).json((await deleteUserService.byId(req.params.id)))
    } catch(e) {
        res.status(500).json(e)
    }
}
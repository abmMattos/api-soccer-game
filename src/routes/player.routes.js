const { Router } = require('express')

const PlayerController = require('../controllers/PlayerController')

const playerRoutes = Router()

const playerController = new PlayerController()

playerRoutes.get('/', playerController.findAll)
playerRoutes.post('/create', playerController.create)
playerRoutes.put('/update', playerController.update)
playerRoutes.delete('/delete', playerController.delete)

module.exports = playerRoutes

const { Router } = require('express')

const TeamController = require('../controllers/TeamController')

const teamRoutes = Router()

const teamController = new TeamController()

teamRoutes.post('/create', teamController.create)
teamRoutes.delete('/delete', teamController.delete)

module.exports = teamRoutes

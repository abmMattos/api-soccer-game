const { Router } = require('express')

const TeamPlayersController = require('../controllers/TeamPlayersController')

const teamPlayersRoutes = Router()

const teamPlayersController = new TeamPlayersController()

teamPlayersRoutes.post('/create', teamPlayersController.create)

module.exports = teamPlayersRoutes

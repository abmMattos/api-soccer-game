const { Router } = require('express')

const MatchController = require('../controllers/MatchController')

const matchRoutes = Router()

const matchController = new MatchController()

matchRoutes.get('/', matchController.findAll)
matchRoutes.post('/create', matchController.create)
matchRoutes.put('/update', matchController.update)


module.exports = matchRoutes

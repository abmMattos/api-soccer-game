const { Router } = require("express");

const playerRoutes = require('./player.routes')
const teamRoutes = require('./team.routes');
const teamPlayersRoutes = require("./teamPlayers.routes");
const matchRoutes = require("./match.routes")

const routes = Router()

// Rotas dos controllers
routes.use('/players', playerRoutes)
routes.use('/teams', teamRoutes)
routes.use('/teamplayers', teamPlayersRoutes)
routes.use('/match', matchRoutes)

module.exports = routes
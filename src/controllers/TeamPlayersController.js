const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

class TeamPlayersController {

    async create(request, response) {
        try {
            const { player, team } = request.body
            const teamPlayer = await prisma.teamPlayers.create({
                data: {
                    fk_player_id: player,
                    fk_team_id: team
                }
            })
            response.json(teamPlayer)
        } catch {
            return response.status(409).send()
        }
    }
}

module.exports = TeamPlayersController
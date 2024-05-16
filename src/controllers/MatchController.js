const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

class MatchController {

    async findAll(request, response) {
        try {
            const match = await prisma.match.findMany({})
            response.json(match)
        } catch {
            return response.status(409).send()
        }
    }

    async create(request, response) {
        try {
            const { date, locale, scoreboard, homeTeam, visitorTeam } = request.body
            const team = await prisma.match.create({
                data: {
                    date: date,
                    locale: locale,
                    scoreboard: scoreboard,
                    homeTeam: homeTeam,
                    visitorTeam: visitorTeam
                }
            })
            response.json(team)
        } catch {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { id, date, locale, scoreboard, homeTeam, visitorTeam } = request.body
            const team = await prisma.match.update({
                where: {
                    id: id
                },
                data: {
                    date: date,
                    locale: locale,
                    scoreboard: scoreboard,
                    homeTeam: homeTeam,
                    visitorTeam: visitorTeam
                }
            })
            response.json(team)
        } catch {
            return response.status(409).send()
        }
    }
}

module.exports = MatchController
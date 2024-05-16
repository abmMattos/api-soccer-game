const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TeamController {

    async create(request, response) {
        try {
            const { name, fundation, country, technician } = request.body
            const team = await prisma.team.create({
                data: {
                    name: name,
                    fundation: fundation,
                    country: country,
                    technician: technician,
                }
            })
            response.json(team)
        } catch {
            return response.status(409).send()
        }
        
    }

    async delete(request, response) {
        try {
            const { id } = request.body
            const team = await prisma.team.delete({
                where: {
                    id: id
                }
            })
            response.json(team)
        } catch {
            return response.status(409).send()

        }
    }

}

module.exports = TeamController
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

class PlayerController {

    async findAll(request, response) {
        try {
            const player = await prisma.player.findMany({})
            response.json(player)
        } catch {
            return response.status(409).send()
        }
    }

    async create(request, response) {
        try {
            const { name, age, position, nationality} = request.body
            const player = await prisma.player.create({
                data: {
                    name: name,
                    age: age,
                    position: position,
                    nationality: nationality,
                }
            })
            response.json(player)
        } catch {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { id, name, age, position, nationality} = request.body
            const player = await prisma.player.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    age: age,
                    position: position,
                    nationality: nationality,
                }
            })
            response.json(player)
        } catch {
            return response.status(409).send()
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.body
            const player = await prisma.player.delete({
                where: {
                    id: id
                }
            })
            response.json(player)
        } catch {
            return response.status(409).send()

        }
    }
}

module.exports = PlayerController
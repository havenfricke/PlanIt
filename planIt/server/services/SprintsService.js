import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"



class SprintsService {
    async getSprintsByProject(id) {
        const sprints = await dbContext.Sprints.find({ projectId: id }).populate('creator')
        if (!sprints) {
            throw new BadRequest("There is no Project to find")
        }
        return sprints
    }

    async createSprint(body) {
        const sprint = await dbContext.Sprints.create(body)
        await sprint.populate('creator')
        return sprint
    }

    async deleteSprint(id, userId) {
        const doomedSprint = await dbContext.Sprints.findById(id)
        if (doomedSprint.creatorId.toString() !== userId) {
            throw new Forbidden("You cannot delete this Sprint")
        }
        await doomedSprint.delete()
        return "Sprint Delorted"
    }
}

export const sprintsService = new SprintsService()
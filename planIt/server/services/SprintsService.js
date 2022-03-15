import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



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
}

export const sprintsService = new SprintsService()
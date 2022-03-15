import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"



class ProjectsService {
    async getProjects(query = {}) {
        const projects = dbContext.Projects.find(query).populate('creator')
        return projects
    }
    async getProjectById(id) {
        const project = await dbContext.Projects.findById(id).populate('creator')
        if (!project) {
            throw new BadRequest("There is no Project to find")
        }
        return project
    }

    async createProject(body) {
        const project = await dbContext.Projects.create(body)
        await project.populate('creator')
        return project
    }

    async deleteProject(id, userId) {
        const doomedProject = await dbContext.Projects.findById(id)
        if (doomedProject.creatorId.toString() !== userId) {
            throw new Forbidden("This is not your project")
        }
        await doomedProject.delete()
        return "Project Delorted"
    }
}

export const projectsService = new ProjectsService()
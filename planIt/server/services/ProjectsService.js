import { dbContext } from "../db/DbContext"



class ProjectsService {
    async getProjects(req) {
        const projects = dbContext.Projects
        return projects
    }
    async getProjectById(id) {
        const project = dbContext.Projects.findById(id)
        return project
    }

    async createProject(body) {
        const project = await dbContext.Projects.create(body)
        await project.populate('creator', 'name')
    }
}

export const projectsService = new ProjectsService()
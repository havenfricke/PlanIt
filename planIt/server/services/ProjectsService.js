import { dbContext } from "../db/DbContext"



class ProjectsService {
    async getProjects() {
        const projects = dbContext.Projects.find()
        return projects
    }
    async getProjectsById() {

    }
}

export const projectsService = new ProjectsService()
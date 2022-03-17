import { applyStyles } from "@popperjs/core"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProjectsService {
  async getAllProjects(query = {}) {
    const res = await api.get('/api/projects', { params: query })
    logger.log('get all projects', res.data)
    AppState.projects = res.data
  }

  async getAllOtherProjects(query = {}) {
    const res = await api.get('/api/projects', { params: query })
    logger.log('get all projects', res.data)
    AppState.otherProjects = res.data
  }

  async getProjectById(id) {
    const res = await api.get('/api/projects/' + id)
    logger.log("your project is...", res.data)
    AppState.projects = res.data
  }

  async createProject(body) {
    logger.log(body, 'made it to service')
    const res = await api.post('/api/projects', body)
    logger.log('project created', res.data)
    AppState.projects = [...AppState.projects, res.data]
    return res.data
  }

  async deleteProject(id) {
    const res = await api.delete('/api/projects/' + id)
    logger.log('projects are...', AppState.projects)
    AppState.projects = []
    logger.log("Project Delorted")
  }
}

export const projectsService = new ProjectsService()
import { projectsService } from "../services/ProjectsService";
import BaseController from "../utils/BaseController";


export class ProjectsController extends BaseController {
    constructor() {
        super('api/projects')
        this.router
            .get('', this.getProjects)
            .post('', this.createProject)
        // .get('/:id', this.getProjectsById)
    }
    async getProjects(req, res, next) {
        try {
            const projects = await projectsService.getProjects(req)
            res.send(projects)
        } catch (error) {
            next(error)
        }
    }
    async getProjectById(req, res, next) {
        try {
            const project = await projectsService.getProjectById(req.params.id)
            res.send(project)
        } catch (error) {
            next(error)
        }
    }

    async createProject(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const project = await projectsService.createProject(req.body)
            res.send(project)
        } catch (error) {
            next(error)
        }
    }


}
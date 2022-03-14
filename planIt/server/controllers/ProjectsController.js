import { projectsService } from "../services/ProjectsService";
import BaseController from "../utils/BaseController";


export class ProjectsController extends BaseController {
    constructor() {
        super('api/projects')
        this.router
            .get('', this.getProjects)
            .get('/:id', this.getProjectsById)
    }
    async getProjects(req, res, next) {
        try {
            const projects = await projectsService.getProjects()
            res.send(projects)
        } catch (error) {
            next(error)
        }
    }
    async getProjectsById(req, res, next) {
        try {
            const projects = await projectsService.getProjectsById(req.params.id)
            res.send(projects)
        } catch (error) {
            next(error)
        }
    }


}
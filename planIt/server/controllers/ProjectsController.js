import { Auth0Provider } from "@bcwdev/auth0provider";
import { projectsService } from "../services/ProjectsService";
import BaseController from "../utils/BaseController";


export class ProjectsController extends BaseController {
    constructor() {
        super('api/projects')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getProjects)
            .post('', this.createProject)
            .get('/:id', this.getProjectById)
            .delete('/:id', this.deleteProject)
    }
    async getProjects(req, res, next) {
        try {
            const projects = await projectsService.getProjects(req.query)
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
    async deleteProject(req, res, next) {
        try {
            const doomed = await projectsService.deleteProject(req.params.id, req.userInfo.id)
            return res.send(doomed)
        } catch (error) {
            next(error)
        }
    }


}
import { Auth0Provider } from "@bcwdev/auth0provider"
import { dbContext } from "../db/DbContext"
import { sprintsService } from "../services/SprintsService"
import BaseController from "../utils/BaseController"




export class SprintsController extends BaseController {
    constructor() {
        super('api/projects')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:id/sprints', this.createSprint)
            .get('/:id/sprints', this.getSprintsByProject)
            .delete('/:id/sprints/:id', this.deleteSprint)
    }

    async createSprint(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            req.body.projectId = req.params.id
            const sprint = await sprintsService.createSprint(req.body)
            res.send(sprint)
        } catch (error) {
            next(error)
        }
    }

    async getSprintsByProject(req, res, next) {
        try {
            req.body.projectId = req.params.id
            const sprints = await sprintsService.getSprintsByProject(req.params.id)
            res.send(sprints)
        } catch (error) {
            next(error)
        }
    }

    async deleteSprint(req, res, next) {
        try {
            const doomed = await sprintsService.deleteSprint(req.params.id, req.userInfo.id)
            res.send(doomed)
        } catch (error) {
            next(error)
        }
    }

}
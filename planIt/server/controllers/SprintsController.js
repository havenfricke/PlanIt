import { Auth0Provider } from "@bcwdev/auth0provider"
import { dbContext } from "../db/DbContext"
import BaseController from "../utils/BaseController"




export class SprintsController extends BaseController {
    constructor() {
        super('api/projects')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('/:id/sprints', this.getSprintsByProject)
    }

    async getSprintsByProject(req, res, next) {
        try {
            const sprints = await dbContext.Sprints.find(req.query)
            res.send(sprints)
        } catch (error) {
            next(error)
        }
    }
}
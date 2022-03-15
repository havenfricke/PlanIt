import { Auth0Provider } from "@bcwdev/auth0provider"
import { dbContext } from "../db/DbContext"
import { tasksService } from "../services/TasksService"
import BaseController from "../utils/BaseController"




export class TasksController extends BaseController {
    constructor() {
        super('api/projects/:id/tasks')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTask)
    }

    async createTask(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            req.body.projectId = req.params.id
            const task = await tasksService.createTask(req.body)
            res.send(task)
        } catch (error) {
            next(error)
        }
    }
}
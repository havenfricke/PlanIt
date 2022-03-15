import { Auth0Provider } from "@bcwdev/auth0provider"
import { dbContext } from "../db/DbContext"
import { notesService } from "../services/NotesService"
import { tasksService } from "../services/TasksService"
import BaseController from "../utils/BaseController"




export class TasksController extends BaseController {
    constructor() {
        super('api/projects/:id/tasks')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTask)
            .get('', this.getTasks)
            .delete('/:id', this.deleteTask)
            .put('/:id', this.editTask)
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

    async getTasks(req, res, next) {
        try {
            const tasks = await tasksService.getTasks(req.params.id)
            res.send(tasks)
        } catch (error) {
            next(error)
        }
    }

    async editTask(req, res, next) {
        try {
            req.body.id = req.params.id
            const task = await tasksService.editTask(req.body, req.userInfo.id)
            return res.send(task)
        } catch (error) {
            next(error)
        }
    }

    async deleteTask(req, res, next) {
        try {
            const doomed = await tasksService.deleteTask(req.params.id, req.userInfo.id)
            res.send(doomed)
        } catch (error) {
            next(error)
        }
    }
}
import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"



class TasksService {
    async createTask(body) {
        const task = await dbContext.Tasks.create(body)
        await task.populate('sprint')
        await task.populate('creator')
        return task
    }

    async getTasks(id) {
        const tasks = await dbContext.Tasks.find({ projectId: id }).populate('sprint').populate('creator')
        if (!tasks) {
            throw new BadRequest("No tasks found")
        }
        return tasks
    }

    async deleteTask(id, userId) {
        const doomedTask = await dbContext.Tasks.findById(id)
        if (doomedTask.creatorId.toString() !== userId) {
            throw new Forbidden("You cannot delort this")
        }
        doomedTask.delete()
        return "Task Delorted"
    }

}

export const tasksService = new TasksService()
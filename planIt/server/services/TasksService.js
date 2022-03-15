import { dbContext } from "../db/DbContext"



class TasksService {
    async createTask(body) {
        // NOTE ASK MICK WHY WE CANT PUT POPULATE AT THE END OF LINE 8
        const task = await dbContext.Tasks.create(body)
        await task.populate('sprint')
        await task.populate('creator')
        return task
    }

}

export const tasksService = new TasksService()
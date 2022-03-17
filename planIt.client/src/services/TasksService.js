import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "../services/AxiosService"

class TasksService {

  async getTasks(id) {
    const res = await api.get('/api/projects/' + id + '/tasks')
    AppState.tasks = res.data
    logger.log('get tasks', res.data)
  }

  async createTask(projId, body) {
    logger.log("task body is...", body)
    const res = await api.post('/api/projects/' + projId + '/tasks/', body)
    logger.log("task created...", res.data)
    AppState.tasks = [...AppState.tasks, res.data]
  }

  async deleteTask(projId, taskId) {
    const res = await api.delete('/api/projects/' + projId + '/tasks/' + taskId)
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId)
    logger.log("task delorted", taskId)
  }

  async editTask(projId, taskId, body) {
    logger.log("body is...", body)
    if (body.isComplete != undefined) {
      !body.isComplete
    }
    const res = await api.put('/api/projects/' + projId + '/tasks/' + taskId, body)
    // const editIndex = AppState.tasks.findIndex(t => t.id == taskId)
    // logger.log("index is...", editIndex)
    // AppState.tasks = AppState.tasks.splice(editIndex, 1)
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId)
    AppState.tasks.push(res.data)
    logger.log("task edited", res.data)
    logger.log("tasks are...", AppState.tasks)
  }

}
export const tasksService = new TasksService()
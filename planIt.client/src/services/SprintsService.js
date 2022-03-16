import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async getSprints(id) {
    const res = await api.get('/api/projects/' + id + '/sprints')
    AppState.sprints = res.data
    logger.log('get sprints', res.data)
  }
  async createSprint(id, body) {
    const res = await api.post('/api/projects/' + id + '/sprints', body)
    AppState.sprints = [...AppState.sprints, res.data]
    logger.log('create sprint', res.data)
  }

  async deleteSprint(projId, sprintId) {
    await api.delete('/api/projects/' + projId + '/sprints/' + sprintId)
    AppState.sprints = AppState.sprints.filter(s => s.id !== sprintId)
    logger.log("Sprint Delorted...", sprintId)
  }
}

export const sprintsService = new SprintsService()
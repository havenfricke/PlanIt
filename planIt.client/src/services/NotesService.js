import { AppState } from "../AppState"
import { api } from "../services/AxiosService"
import { logger } from "../utils/Logger"

class NotesService {

    async createNote(projId, body) {
        const res = await api.post('/api/projects/' + projId + '/notes/', body)
        AppState.notes = [...AppState.notes, res.data]
        logger.log("New note", res.data)
    }

    async deleteNote(projId, noteId) {
        const res = await api.delete('/api/projects/' + projId + '/notes/' + noteId)
        AppState.notes = AppState.notes.filter(n => n.id !== noteId)
        logger.log("Note Delorted")
    }

}

export const notesService = new NotesService()
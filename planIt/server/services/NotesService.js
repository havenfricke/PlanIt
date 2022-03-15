import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"




class NotesService {
    async post(body) {
        const note = await dbContext.Notes.create(body)
        await note.populate('task')
        await note.populate('creator')
        return note
    }

    async getNotes(id) {
        const notes = await dbContext.Notes.find({ projectId: id }).populate('creator').populate('task')
        return notes
    }

    async deleteNote(id, userId) {
        const doomedNote = await dbContext.Notes.findById(id)
        if (doomedNote.creatorId.toString() !== userId) {
            throw new Forbidden("Cannot Delete Note")
        }
        await doomedNote.delete()
        return "Note Delorted"
    }

}

export const notesService = new NotesService()
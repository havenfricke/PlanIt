import { Auth0Provider } from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext";
import { notesService } from "../services/NotesService";
import BaseController from "../utils/BaseController";




export class NotesController extends BaseController {
    constructor() {
        super('api/projects/:id/notes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createNote)
            .get('', this.getNotes)
            .delete('/:id', this.deleteNote)
    }

    async createNote(req, res, next) {
        try {
            req.body.projectId = req.params.id
            req.body.creatorId = req.userInfo.id
            const note = await notesService.post(req.body)
            return res.send(note)
        } catch (error) {
            next(error)
        }
    }

    async getNotes(req, res, next) {
        try {
            req.body.projectId = req.params.id
            const notes = await notesService.getNotes(req.params.id)
            res.send(notes)
        } catch (error) {
            next(error)
        }
    }

    async deleteNote(req, res, next) {
        try {
            const doomed = await notesService.deleteNote(req.params.id, req.userInfo.id)
            return res.send(doomed)
        } catch (error) {
            next(error)
        }
    }

}

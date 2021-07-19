import Express from 'express';
import NotesController from '../../Controllers/Notes.js';

const NotesRoutes = Express.Router();

NotesRoutes.get('/getNotes/:course', NotesController.getNotes)

NotesRoutes.post('/Create', NotesController.create)


export default NotesRoutes;
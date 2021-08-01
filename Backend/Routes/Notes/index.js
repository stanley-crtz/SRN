import Express from 'express';
import NotesController from '../../Controllers/Notes.js';

const NotesRoutes = Express.Router();

NotesRoutes.get('/getNotes/:course', NotesController.getNotes)

NotesRoutes.post('/Create', NotesController.create)

NotesRoutes.get('/getNotesById/:id', NotesController.getNotesById)

NotesRoutes.put('/updateNotes', NotesController.updateNotes)

NotesRoutes.delete('/deleteNotes/:id', NotesController.deleteNotes);

NotesRoutes.get('/getNotesByStudent/:idStudent', NotesController.getNotesByStudent)


export default NotesRoutes;
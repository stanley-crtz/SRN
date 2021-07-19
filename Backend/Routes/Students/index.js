import Express from 'express';
import Students from '../../Controllers/Students.js';

const StudentsRoutes = Express.Router();

StudentsRoutes.get('/getAll', Students.getStudents)

StudentsRoutes.post('/Create', Students.create)


export default StudentsRoutes;
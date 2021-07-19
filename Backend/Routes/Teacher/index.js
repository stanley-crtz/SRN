import Express from 'express';
import Teachers from '../../Controllers/Teachers.js';

const TeachersRoutes = Express.Router();

TeachersRoutes.get('/getAll', Teachers.getTeachers)

TeachersRoutes.post('/Create', Teachers.create)


export default TeachersRoutes;
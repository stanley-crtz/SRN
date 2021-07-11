import Express from 'express';
import Teachers from '../../Controllers/Teachers.js';

const TeachersRoutes = Express.Router();

TeachersRoutes.get('/getAll', Teachers.getTeachers)
TeachersRoutes.get('/getByID/:id', Teachers.getByID)

TeachersRoutes.post('/Create', Teachers.create)

TeachersRoutes.put('/Update', Teachers.Update)

TeachersRoutes.delete('/Delete/:id', Teachers.Delete)

export default TeachersRoutes;
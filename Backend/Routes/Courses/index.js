import Express from 'express';
import CoursesController from '../../Controllers/Courses.js';

const CoursesRoutes = Express.Router();

CoursesRoutes.get('/getAll', CoursesController.getCoursesAll)
CoursesRoutes.post('/create', CoursesController.create)
CoursesRoutes.get('/getByID/:id', CoursesController.getById)
CoursesRoutes.put('/Update', CoursesController.Update)
CoursesRoutes.get('/getCoursesByTeacher/:idTeacher', CoursesController.getCoursesByTeacher)

export default CoursesRoutes;
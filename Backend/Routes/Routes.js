import Express from 'express';
import UsersRoutes from './Users/index.js';
import TeachersRoutes from './Teacher/index.js';
import StudentsRoutes from './Students/index.js';
import CoursesRoutes from './Courses/index.js';
import NotesRoutes from './Notes/index.js';

let Routes = Express.Router();

Routes.use('/Users/', UsersRoutes)
Routes.use('/Teachers/', TeachersRoutes)
Routes.use('/Students/', StudentsRoutes)
Routes.use('/Courses/', CoursesRoutes)
Routes.use('/Notes', NotesRoutes)

export default Routes;
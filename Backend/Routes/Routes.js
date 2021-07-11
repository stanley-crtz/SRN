import Express from 'express';
import LoginRoutes from './Login/index.js';
import TeachersRoutes from './Teacher/index.js';

let Routes = Express.Router();

Routes.use(LoginRoutes)
Routes.use('/Teachers/', TeachersRoutes)

export default Routes;
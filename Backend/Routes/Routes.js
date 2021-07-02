import Express from 'express';
import LoginRoutes from './Login/index.js';

let Routes = Express.Router();

Routes.use(LoginRoutes)

export default Routes;
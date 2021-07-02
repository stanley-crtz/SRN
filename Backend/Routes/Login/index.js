import Express from 'express';
import Login from '../../Controllers/Login.js';

const LoginRoutes = Express.Router();

LoginRoutes.get('/SignIn',  Login.SignIn)

export default LoginRoutes;
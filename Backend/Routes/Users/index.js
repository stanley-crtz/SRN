import Express from 'express';
import UsersController from '../../Controllers/Users.js';

const UsersRoutes = Express.Router();

UsersRoutes.post('/SignIn',  UsersController.SignIn)

UsersRoutes.get('/getByID/:id', UsersController.getByID)
UsersRoutes.put('/Update', UsersController.Update)

UsersRoutes.delete('/Delete/:id', UsersController.Delete)

export default UsersRoutes;
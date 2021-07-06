import Express from 'express';
import SearchFiles from '../Class/SearchFiles.js';

const Routes = Express.Router();

// Routes.get(
//     '/',
//     (req, res) => res.sendFile(
//         SearchFiles.__Views('index.html')
//     )
// )

Routes.get(
    '/Login',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Login', 'index.html')
    )
)

Routes.get(
    '/Management',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Asignaturas', 'index.html')
    )
)

Routes.get(
    '/Management/Asignaturas',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Asignaturas', 'index.html')
    )
)


export default Routes;
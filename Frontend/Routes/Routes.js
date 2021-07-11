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
        SearchFiles.__Views('Management', 'Courses', 'index.html')
    )
)

Routes.get(
    '/Management/Courses',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Courses', 'index.html')
    )
)

Routes.get(
    '/Management/Courses/Create',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Courses', 'Create', 'index.html')
    )
)

Routes.get(
    '/Management/Teachers',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Teachers', 'index.html')
    )
)

Routes.get(
    '/Management/Teachers/Create',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Teachers', 'Create', 'index.html')
    )
)

Routes.get(
    '/Management/Teachers/:id/Edit',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Teachers', 'Edit', 'index.html')
    )
)



export default Routes;
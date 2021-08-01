import Express from 'express';
import SearchFiles from '../Class/SearchFiles.js';

const Routes = Express.Router();

Routes.get(
    '/',
    (req, res) => res.redirect('/Login')
)

Routes.get(
    '/Login',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Login', 'index.html')
    )
)

// -------------------- Administrador -------------------

// Courses

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
    '/Management/Courses/:id/Edit',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Courses', 'Edit', 'index.html')
    )
)

Routes.get(
    '/Management/Courses/:id/Information',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Courses', 'Information', 'index.html')
    )
)

Routes.get(
    '/Management/Courses/:id/:course/Student',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Courses', 'Notes', 'index.html')
    )
)

// Teachers

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

// Students

Routes.get(
    '/Management/Students',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Students', 'index.html')
    )
)

Routes.get(
    '/Management/Students/Create',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Students', 'Create', 'index.html')
    )
)

Routes.get(
    '/Management/Students/:id/Edit',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Management', 'Students', 'Edit', 'index.html')
    )
)

// -------------------- Teachers -------------------

Routes.get(
    '/Teacher',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Teacher', 'Courses', 'index.html')
    )
)

Routes.get(
    '/Teacher/Courses',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Teacher', 'Courses', 'index.html')
    )
)

Routes.get(
    '/Teacher/Courses/:id/Information',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Teacher', 'Courses', 'Information', 'index.html')
    )
)

Routes.get(
    '/Teacher/Courses/:id/:course/Student',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Teacher', 'Courses', 'Notes', 'index.html')
    )
)

Routes.get(
    '/Teacher/Profile',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Teacher', 'User', 'index.html')
    )
)

// -------------------- Students -------------------

Routes.get(
    '/Student',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Student', 'Notes', 'index.html')
    )
)

Routes.get(
    '/Student/Notes',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Student', 'Notes', 'index.html')
    )
)

Routes.get(
    '/Student/Profile',
    (req, res) => res.sendFile(
        SearchFiles.__Views('Student', 'User', 'index.html')
    )
)

export default Routes;
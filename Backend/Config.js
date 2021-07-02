import MySql from 'mysql';

export const connect = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'School'
})
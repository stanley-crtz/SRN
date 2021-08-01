import { connect } from "../Config.js";

const CoursesController = {
    create: ({ body }, res) => {
        const { name, acronym, code, user } = body;

        const query = 'INSERT INTO Courses (Name, Acronym, Code, idUser, Active) VALUES (?,?,?,?, 1)';

        connect.query(
            query,
            [name, acronym, code, user],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    getCoursesAll: (req, res) => {
        const query = 'SELECT * FROM Courses';

        connect.query(
            query,
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    getById: ({ params }, res) => {

        const { id } = params;
        const query = 'SELECT Courses.Name, Courses.Acronym, Courses.Code, Courses.Active, Users.idUser, Users.Name AS User  FROM Courses, Users WHERE Courses.idCourses = ? AND Courses.idUser = Users.idUser;';

        connect.query(
            query,
            [id],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result: result[0]
                });
            }
        )
    },
    Update: ({ body }, res) => {

        const { name, acronym, code, user, active, id } = body;

        const query = "UPDATE Courses SET Name=?, Acronym=?, Code=?, idUser=?, Active=? WHERE idCourses = ?";

        connect.query(
            query,
            [name, acronym, code, user, active, id],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    getCoursesByTeacher: ({ params }, res) => {

        const { idTeacher } = params;

        const query = 'SELECT * FROM Courses WHERE Courses.idUser = ? AND Courses.Active = true';

        connect.query(
            query,
            [idTeacher],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    }
};

export default CoursesController;

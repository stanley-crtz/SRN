import { connect } from "../Config.js";

const NotesController = {
    create: ({ body }, res) => {
        const { idUser, idCourses } = body;

        const query = 'INSERT INTO AcademicNotes (idUser, idCourses, Date, C1_L1, C1_L2, C1_P, C1_Note, C2_L1, C2_L2, C2_P, C2_Note, C3_L1, C3_L2, C3_P, C3_Note, Rep, Final) VALUES (?,?,?,0,0,0,0,0,0,0,0,0,0,0,0,0,0)';

        const date = new Date()

        const year = date.getFullYear()

        connect.query(
            query,
            [idUser, idCourses, year],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ msg: 'Server Error' })
                };

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    getNotes: ({ params }, res) => {

        const { course } = params

        const query = 'SELECT idNotes, Users.idUser, Users.Name, idCourses, Date, C1_L1, C1_L2, C1_P, C1_Note, C2_L1, C2_L2, C2_P, C2_Note, C3_L1, C3_L2, C3_P, C3_Note, Rep, Final FROM AcademicNotes, Users WHERE AcademicNotes.Date = ? AND Users.idUser = AcademicNotes.idUser AND AcademicNotes.idCourses = ?';

        const date = new Date()

        const year = date.getFullYear()

        connect.query(
            query,
            [year, course],
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

export default NotesController;

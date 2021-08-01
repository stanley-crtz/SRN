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

        const query = 'SELECT idNotes, Users.idUser, Users.Name, idCourses, Date, C1_L1, C1_L2, C1_P, C1_Note, C2_L1, C2_L2, C2_P, C2_Note, C3_L1, C3_L2, C3_P, C3_Note, Rep, Final FROM AcademicNotes, Users WHERE AcademicNotes.Date = ? AND Users.idUser = AcademicNotes.idUser AND AcademicNotes.idCourses = ? ORDER BY Users.Name ASC';

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
    },
    getNotesById: ({ params }, res) => {

        const { id } = params;

        const query = 'SELECT AcademicNotes.idNotes, Users.Name, Courses.Name AS Course, AcademicNotes.C1_L1, AcademicNotes.C1_L2, AcademicNotes.C1_P, AcademicNotes.C1_Note, AcademicNotes.C2_L1, AcademicNotes.C2_L2, AcademicNotes.C2_P, AcademicNotes.C2_Note, AcademicNotes.C3_L1, AcademicNotes.C3_L2, AcademicNotes.C3_P, AcademicNotes.C3_Note, AcademicNotes.Rep, AcademicNotes.Final FROM AcademicNotes, Users, Courses WHERE Users.idUser = AcademicNotes.idUser AND Courses.idCourses = AcademicNotes.idCourses AND AcademicNotes.idNotes = ?'

        connect.query(
            query,
            [id],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )

    },
    updateNotes: ({ body }, res) => {

        const { C1_L1, C1_L2, C1_P, C1_Note, C2_L1, C2_L2, C2_P, C2_Note, C3_L1, C3_L2, C3_P, C3_Note, Rep, Final, idNotes } = body;

        const query = 'UPDATE AcademicNotes SET C1_L1=?, C1_L2=?, C1_P=?, C1_Note=?, C2_L1=?, C2_L2=?, C2_P=?, C2_Note=?, C3_L1=?, C3_L2=?, C3_P=?, C3_Note=?, Rep=?, Final=? WHERE AcademicNotes.idNotes = ? ';

        connect.query(
            query,
            [C1_L1, C1_L2, C1_P, C1_Note, C2_L1, C2_L2, C2_P, C2_Note, C3_L1, C3_L2, C3_P, C3_Note, Rep, Final, idNotes],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )

    },
    deleteNotes: ({ params }, res) => {

        const { id } = params;

        const query = 'DELETE FROM AcademicNotes WHERE idNotes = ?';

        connect.query(
            query,
            [id],
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

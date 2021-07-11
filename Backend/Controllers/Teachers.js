import { connect } from "../Config.js";

const Teachers = {
    create: ({ body }, res) => {
        const { name, dui, address, phone, email, password } = body;

        const query = 'INSERT INTO Teachers (Name, DUI, Address, Phone, Email, Password, idTypeUser) VALUES (?,?,?,?,?,?,2)';

        connect.query(
            query,
            [name, dui, address, phone, email, password],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    getTeachers: (req, res) => {
        const query = 'SELECT idTeacher, Name, DUI, Address, Phone, Email FROM Teachers WHERE idTypeUser = 2';

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
    getByID: ({ params }, res) => {

        const { id } = params;

        const query = 'SELECT Name, DUI, Address, Phone, Email, Password FROM Teachers WHERE idTeacher = ?';

        connect.query(
            query,
            [id],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ msg: 'Server Error' })
                };

                return res.status(200).send({
                    msg: 'Exito',
                    result: result[0]
                });
            }
        )
    },
    Update: ({body}, res) => {

        const { id, name, dui, address, phone, email, password } = body;

        const query = "UPDATE Teachers SET Name=?, DUI=?, Address=?, Phone=?, Email=?, Password=? WHERE idTeacher = ?";

        connect.query(
            query,
            [name, dui, address, phone, email, password, id],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                return res.status(200).send({
                    msg: 'Exito',
                    result
                });
            }
        )
    },
    Delete: ({ params }, res) => {

        const { id } = params;

        const query = 'DELETE FROM Teachers WHERE idTeacher = ?';

        connect.query(
            query,
            [id],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ msg: 'Server Error' })
                };

                return res.status(200).send({
                    msg: 'Exito',
                    result: result[0]
                });
            }
        )
    }
};

export default Teachers;

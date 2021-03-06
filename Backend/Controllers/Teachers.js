import { connect } from "../Config.js";

const Teachers = {
    create: ({ body }, res) => {
        const { name, dui, address, phone, email, password } = body;

        const query = 'INSERT INTO Users (Name, DUI, Address, Phone, Email, Password, idTypeUser) VALUES (?,?,?,?,?,?,2)';

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
        const query = 'SELECT idUser, Name, DUI, Address, Phone, Email FROM Users WHERE idTypeUser = 2';

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
    }
};

export default Teachers;

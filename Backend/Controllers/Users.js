import { connect } from "../Config.js";
import { createToken } from "../Services/Login.js";

const Users = {
    SignIn: ({ body }, res) => {

        const { email, password } = body;

        if (!email) return res.status(500).send({ msg: 'Empty email' });

        if (!password) return res.status(500).send({ msg: 'Empty password' });

        const query = 'SELECT * FROM Users, TypeUsers WHERE Users.Email = ? AND Users.Password = ? AND Users.idTypeUser = TypeUsers.idTypeUser';
        connect.query(
            query,
            [email, password],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                if (result.length === 0) return res.status(200).send({ msg: 'User not found' });

                return res.status(200).send({
                    msg: 'Exito',
                    token: createToken(result[0]),
                    typeUser: result[0].TypeUser,
                    id: result[0].idUser
                });
            }
        )
    },
    getByID: ({ params }, res) => {

        const { id } = params;

        const query = 'SELECT Name, DUI, Address, Phone, Email, Password FROM Users WHERE idUser = ?';

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

        const query = "UPDATE Users SET Name=?, DUI=?, Address=?, Phone=?, Email=?, Password=? WHERE idUser = ?";

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

        const query = 'DELETE FROM Users WHERE idUser = ?';

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

export default Users;

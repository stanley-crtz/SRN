import { connect } from "../Config.js";
import { createToken } from "../Services/Login.js";

const Login = {
    SignIn: ({ body }, res) => {

        const { email, password } = body;

        if (!email) return res.status(500).send({ msg: 'Empty email' });

        if (!password) return res.status(500).send({ msg: 'Empty password' });

        const query = 'SELECT * FROM Teachers WHERE Teachers.Email = ? AND Teachers.Password = ?';
        connect.query(
            query,
            [email, password],
            (err, result) => {
                if (err) return res.status(500).send({ msg: 'Server Error' });

                if (result.length === 0) return res.status(200).send({ msg: 'User not found' });

                return res.status(200).send({
                    msg: 'Exito',
                    token: createToken(result[0])
                });
            }
        )
    }
}

export default Login;
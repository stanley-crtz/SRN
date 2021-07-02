'use strict';

import Dotenv from 'dotenv';
import jwt from 'jwt-simple';
import moment from 'moment';

Dotenv.config()

export const createToken = (user) => {
    const payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, process.env.SECRET_TOKEN)
}

export const decodeToken = (token) => {
    const decoded = new Promise((resolve, reject) => {
        try {

            const payload = jwt.decode(token, process.env.SECRET_TOKEN)
            
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token a expirado'
                });
            }

            resolve(payload.sub)

        } catch (error) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    });

    return decoded;
}
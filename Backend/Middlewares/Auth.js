'use strict'

const { decodeToken } = require('../Services/Login.js');

const isAuth = (req, res, next) => {
    
    if (!req.headers.Authorization) {
        return res.status(403).send({ message: 'No tienes autoriacion'});
    }

    const token = req.headers.Authorization;
    
    decodeToken(token)
        .then(response => {
            req.user = response,
            next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

export default isAuth;
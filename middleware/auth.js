const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwt_secret = process.env.JWT_SECRET


const auth = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 'error',
            message: 'token is required'
        })
    }

    const bearerToken = req.headers.authorization.split(" ")[1]

    //verify jwt
    jwt.verify(bearerToken, jwt_secret, (error, resp) => {
        if (error) {
            return res.status(401).json({
                status: false,
                message: error.message
            })
        }

        if (resp) {
            next()
        }
    })
}




module.exports = auth
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const jwt_secret = process.env.JWT_SECRET
const salt = 10

//login 
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).send({
                status: "error",
                message: "user not found !",
            })
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {
            res.status(401).send({
                status: 'error',
                message: "wrong password ! "
            })
        }

        if (match) {
            const token = jwt.sign({ email: user.email }, jwt_secret, { expiresIn: '2d' })
            res.status(201).json(
                {
                    token,
                    status: 'ok',
                    message: 'loggin successful !'
                })
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}


//Register
const register = async (req, res) => {

    try {

        //checking if password is an empty string
        if (req.body.password.replace(/\s/g, "") == "") {
            return res.json({
                status: 'error',
                message: 'password cannot be empty'
            })
        }

        //hashing password
        const hashedpassword = await bcrypt.hash(req.body.password, salt)

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword
        })
        res.status(201).send({
            status: 'ok',
            message: 'Registered successfully'
        })
    } catch (error) {

        // checking duplicate email
        if (error.code === 11000) {
            return res.json({
                status: 'error',
                message: 'email already in use'
            })
        }

        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}


module.exports = { register, login }




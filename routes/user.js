const router = require('express').Router()
const { login, register } = require('../controllers/user')

//register user
router.post('/register', register)

//login user
router.post('/login', login)


module.exports = router

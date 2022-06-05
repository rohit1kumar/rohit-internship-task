const router = require('express').Router()
const { addContact, findOne, findAll, findByPhaseMatch, findByIdAndDelete, findByIdAndUpdate } = require('../controllers/contact')
const auth = require('../middleware/auth')

//add a new contact(s)
router.post('/contact', auth, addContact)

// fetch all contacts with pagination
router.get('/contacts', auth, findAll)

//Fetch phase matching results
router.get('/contacts/:name', auth, findByPhaseMatch)

//fetch detail of a contact
router.get('/contact/:id', auth, findOne)

//delete contact by ID
router.delete('/contact/:id', auth, findByIdAndDelete)

//update contact by ID
router.patch('/contact/:id', auth, findByIdAndUpdate)


module.exports = router
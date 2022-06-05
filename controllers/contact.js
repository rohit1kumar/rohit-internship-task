const Contact = require('../models/Contact')

//Add single contact and  bulk contacts 
const addContact = async (req, res) => {
    try {
        const data = await Contact.create(req.body)
        res.status(201).send({
            data,
            status: 'ok',
            message: `new contact(s) added successfully`
        })
    } catch (error) {

        // checking duplicate number
        if (error.code === 11000) {
            return res.json({
                status: 'error',
                message: 'phone number already exists'
            })
        }
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}


// Fetch details of single contact by id 
const findOne = async (req, res) => {
    try {
        const data = await Contact.findById(req.params.id)

        // checking if data found
        if (!data) {
            return res.status(404).send({
                status: 'error',
                message: 'contact not found !',
            })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

// Fetch the list of all contacts with pagination.
const findAll = async (req, res) => {
    try {
        let { page, limit, } = req.query;

        // If the page & limit is not applied in query
        if (!page || page < 1) {
            page = 1 //default value 
        }
        if (!limit || limit < 5) {
            limit = 5 //default value 
        }

        const data = await Contact.find()
            .skip((page) * limit)
            .limit(limit)
            .exec()


        //checking empty result 
        if (!data) {
            return res.status(404).send({
                status: 'error',
                message: 'contacts not found !',
            })
        }
        res.status(200).json({
            data,
            page,
            limit
        })

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

//Fetch phase matching results
const findByPhaseMatch = async (req, res) => {
    try {
        const regex = new RegExp(req.params.name, 'i')
        const data = await Contact.find({ name: regex })

        //checking empty result 
        if (data.length == 0) {
            return res.status(404).send({
                status: 'error',
                message: 'no contact found !',
            })
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

// Update the given contact.

const findByIdAndUpdate = async (req, res) => {
    try {
        const data = await Contact.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            data,
            status: 'ok',
            message: 'updated successfully !'
        })

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

// Delete the given contact

const findByIdAndDelete = async (req, res) => {
    try {
        const data = await Contact.findByIdAndDelete(req.params.id)
        res.status(200).send({
            data,
            status: 'ok',
            message: 'deleted successfully !'
        })

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

module.exports = { addContact, findOne, findAll, findByPhaseMatch, findByIdAndDelete, findByIdAndUpdate }

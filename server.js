require('dotenv').config();
const express = require('express')
const connect = require('./db/connect')
const contact = require('./routes/contact')
const user = require('./routes/user')
const app = express()
const PORT = process.env.PORT || 3000

//DB connection
connect()

//middleware
app.use(express.json())

//routes
app.use('/api', contact)
app.use('/api', user)

//server listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
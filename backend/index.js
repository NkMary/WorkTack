// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/jobs', require('./controllers/work_controller'))
//app.use('/users', require('./work_controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
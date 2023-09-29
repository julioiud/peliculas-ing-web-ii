const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

// middlewares
app.use(express.json())

app.use(cors({
    origin: '*'
}))

const test = require('./routes/test')
const generos = require('./routes/genero')

app.use('/api/v1/tests', test)
app.use('/api/v1/generos', generos)

module.exports = app
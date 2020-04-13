const massive = require('massive');
const express = require('express');

require('dotenv').config()

const { getSymbol } = require('./controllers/stockController')

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(database => {
    app.set('database', database)
    console.log(`Connected to the DB`)
})

app.listen(SERVER_PORT, () => console.log(`Serving up files to port ${SERVER_PORT}`))

//EndPoints
app.get(`/get/symbol`, getSymbol) //Request Symbol information

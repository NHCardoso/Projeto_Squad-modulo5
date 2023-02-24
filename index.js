const express = require('express')
const app = express()
require('dotenv').config()
const casasRouter = require('./routes/casas.router')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/casas', casasRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log("Servidor na porta 8080...")
})
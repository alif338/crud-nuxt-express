import express from 'express'
import cors from 'cors'
import User from './src/routes/user'
import './src/config' // Menginisiasi MongoDB di file config.js
require('dotenv').config({path: `./${process.env.NODE_ENV}.env`})
const app = express()

console.log(process.env.PORT)
console.log(`./${process.env.NODE_ENV}.env`)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/', User)
app.listen(process.env.PORT, () => {
    console.log(`App listening at http://127.0.0.1:${process.env.PORT}`)
});
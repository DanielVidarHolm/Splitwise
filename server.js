const express = require('express')
const app = express()
require('dotenv').config()

// View engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))

// Basic routing
app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})

// Starting server
app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}, You better go catch it!`)
})
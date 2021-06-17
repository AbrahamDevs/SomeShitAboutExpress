"use strict"

//https://expressjs.com/en/guide/using-template-engines.html

const express = require('express')
const app = express()
const PORT = 4040

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//Setting up views directory where the template files is located and the template engine to use
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('index', { title: 'Hello World App', message: 'Hello World!' })
})
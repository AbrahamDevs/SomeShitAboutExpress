"use strict"

//https://expressjs.com/en/guide/using-middleware.html

const express = require('express')
const app = express()
const PORT = 3030

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


//This is an example of a middleware function with no mount path. The function is executed every time the app receives a request.
app.use(function(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

app.get('/', function(req, res, next){
    let shittyMessage = "<h1>Successfully Connected!</h1>"
    shittyMessage += '<h2>This is a Basic Test for Express Middleware Handling</h2>'
    shittyMessage += '<h4>Try Accessing user/id OR asdf/id at the URL</h4>'
    shittyMessage += '<h4>You can input the id with random numbers</h4>'

    res.send(shittyMessage)
})


//This example shows a route and it's handler function (middleware system). The function handles GET requests to the /item/:id path.
app.get('/item/:id', function(req, res, next){
    res.send("USER")
    //example : item/100
})


//Here is an example of loading a series of middleware functions at a mount point, with a mount path. It illustrates a middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.
app.use('/user/:id', function(req, res, next){
    console.log('Request URL: ', req.originalUrl)
    next()
}, function(req, res, next){
    console.log('Request Type: ', req.method)
    next()
})


//This example shows a middleware sub-stack that handles GET requests to the /stuff/:id path
app.get('/stuff/:id', function(req, res, next){
    console.log('ID: ', req.params.id)
    next()
}, function(req, res, next){
    res.send('User info')
})

// handler for the /stuff/:id path, which prints the stuff ID
app.get('/stuff/:id', function(req, res, next){
    res.send(req.params.id)
})


app.get('/asdf/:id', function(req, res, next){
    // if the ID is 0, skip to the next route
    if(req.params.id === '0') next('route')

    // otherwise pass the control to the next middleware function in this stack
    else 
        console.log('ID: ', req.params.id) 
        next()
}, function(req, res, next){
    //sends a regular response
    res.send('It works!')
})

// handler for the /asdf/:id path, which sends a special response (if the id inputted = 0)
app.get('/asdf/:id', function(req, res, next){
    res.send('The id you provide is invalid!')
})
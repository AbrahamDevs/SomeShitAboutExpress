"use strict"

//https://expressjs.com/en/guide/writing-middleware.html

const express = require('express')
const PORT = 3000
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')

const app = express()

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
})

//Middleware = Functions that have access to request object(req), response object(res), and the next function in the application's request-respone cycle.

//Middleware functions can : Execute any code, Make changes to the request and the response object, End the request-respone cycle, and call the next middleware in the stack

// const myLogger = function(req, res, next){
//     console.log("LOGGED")
//     next()
// }

// //Load the middleware function
// app.use(myLogger)

// //the following code loads the myLogger middleware function before the route to the root path (/).
// app.get('/', function(req, res){
//     res.send('Hello World!')
// })


//Middleware function requestTime

// const requestTime = function(req, res, next) {
//     req.requestTime = Date.now()
//     next()
// }

// app.use(requestTime)

// app.get('/', function(req, res){
//     let responseText = 'Hello World!<br>'
//     responseText += '<small>Requested at: ' + req.requestTime + '</small>'
//     res.send(responseText)
//     //When you make a request to the root of the app, the app now displays the timestamp of your request in the browser.
// })
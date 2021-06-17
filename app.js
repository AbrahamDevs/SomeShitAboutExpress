"use strict"

//https://expressjs.com/en/guide/routing.html

const express = require('express')
const app = express()
const PORT = 5000

//listening for connection
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


//respond with "hello world" when a GET request is made to the homepage
// app.get("/", function (req, res){
//     res.send("Hello World!")
// })

//respond with "hello world" when a POST request is made to the homepage
// app.post("/", function(req, res){
//     res.send("Hello World!")
// })

// app.get('/', function(req, res){
//     res.send('root')
// })
// app.get('/about', function(req, res){
//     res.send('about')
// })
// app.get('/random.text', function(req, res){
//     res.send('random.text')
// })

//route parameters = named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

app.get('/', function(req, res){
    res.send("Server Started!")
})

app.get('/users/:userId/books/:bookID', function(req, res){
    res.send(req.params)
    //example = /users/34/books/8989
})

//simple chain routing handler
app.route('/book')
    .get(function(req, res){
        res.send("get a random book!")
    })
    .post(function(req, res){
        res.send("add a book!")
    })
    .put(function(req, res){
        res.send("update the book")
    })

//load bird.js result (example)
//bird.js content = basic express.Router() usage
const birds = require('./birds')
app.use('/birds', birds)
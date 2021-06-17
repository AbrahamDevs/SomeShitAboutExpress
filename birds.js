"use strict"

const express = require('express')
const router = express.Router()

//middleware that is spesific to this router
router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

//define the homepage route
router.get('/', function(req, res){
    res.send('Birds homepage!')
})

//define the about route
router.get('/about', function(req, res){
    res.send('About Birds!')
})

module.exports = router
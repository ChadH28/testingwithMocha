const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const stikers = require('./api/stickers')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use( function(req,res,next) {
    var err = new Error('not found')
    err.status = 404
    next(err)
})

app.use

app.use( function(err,req,res,next) {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    })
})



module.exports = app;
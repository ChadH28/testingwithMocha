const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

const stickers = require('./api/stickers')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/stickers', stickers)

app.use( function(req,res,next) {
    var err = new Error('not found')
    err.status = 404
    next(err)
})


app.use( function(err,req,res,next) {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

module.exports = app;
'use strict'

// allow .jsx and .es6 files to be requirable
// require('babel-core/register')

var express = require('express')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use(express.static('dist'))


app.get('/', function (req, res) {
  res.render('home', { title: 'hi' })
})


var port = process.env.PORT || 4040
app.listen(port, function () {
  console.log('Server listening on port %s', port)
})

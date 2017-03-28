
const express = require('express')
const app = express()
var PORT = process.env.PORT || 3000
const dogs = require('./routes/dogs.js')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/dogs', dogs)


app.listen(PORT, function() {
  console.log(`listening on ${PORT} on day 4`)
})

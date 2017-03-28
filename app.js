const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var PORT = process.env.PORT || 3000
const dogs = require('./routes/dogs.js')

app.use('/dogs', dogs)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.listen(PORT, function() {
  console.log(`listening on ${PORT} on day 4`)
})

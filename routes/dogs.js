const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('retriever')
    .then(result => {
      res.send(result)
    })
})

router.get('/:id', (req, res) => {
  var getId = req.params.id
  knex('retriever').where('id', getId)
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  var newBreed = req.body.breed
  var newAge = req.body.age
  var newColor = req.body.color
  knex('retriever').insert({breed:newBreed, age:newAge, color:newColor}).returning(['id', 'color', 'age', 'breed'])
    .then(result => {
      res.send(result)
    })
})

router.delete('/:id', (req, res) => {
  var getId = req.params.id
  knex('retriever').where('id', getId).del()
    .then(result => {
      res.send(200)
    })
})

router.patch('/:id', (req, res) => {
  var getId = req.params.id
  var newBreed = req.body.breed
  var newColor = req.body.color
  var newAge = req.body.age
  knex('retriever').where('id', getId).update({breed:newBreed, age:newAge, color:newColor}).returning(['id', 'color', 'breed', 'age'])
    .then(result => {
      res.send(result)
    })
})



module.exports = router

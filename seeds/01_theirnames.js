
exports.seed = function(knex, Promise) {
  return knex('retriever').del()
    .then(function () {
      return knex('retriever').insert([
        {
          breed: 'golden',
          color: 'gold',
          age: 6
        },
        {
          breed: 'labrador',
          color: 'yellow',
          age: 5
        },
        {
          breed: 'labrador',
          color: 'black',
          age: 4
        }
      ])
    })
}

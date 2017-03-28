
exports.up = function(knex) {
    return knex.schema.createTable('retriever', r => {
      r.increments('id')
      r.string('breed')
      r.string('color')
      r.integer('age')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('retriever')
}

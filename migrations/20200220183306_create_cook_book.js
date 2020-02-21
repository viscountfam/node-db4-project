
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('Name', 256)
        .notNullable()
        .index()

        tbl.string('description', 700)
        tbl.string('estimated_time', 256)
        tbl.integer('servings')
    })
    //Chaining ingredients and instructions
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name', 128)
      .notNullable();
      tbl.string('ingredient_portion', 256)
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('directions', tbl => {
      tbl.increments()
      tbl.string('direction', 128)
      .notNullable();
      tbl.string('estimated_time_direction')
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes'), knex.schema.dropTableIfExists('ingredients'), knex.schema.dropTableIfExists('directions')
};

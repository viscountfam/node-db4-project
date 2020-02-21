const db = require('../seeds/db-config.js')
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findingredient,
    finddirection
}

function find(){
    return db('recipes')
}

function findById(id) {
    return db('recipes')
    .where({id})
    .first()
}

function add(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
}

function update(changes, id) {
    return db('recipes')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('recipes')
    .where({id})
    .del()
}

function findingredient(recipe_id) {
    return db('ingredients')
    .where({recipe_id})
}

function finddirection(recipe_id) {
    return db('directions')
    .where({recipe_id})
}
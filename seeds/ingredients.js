
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      const ingredients = [{ id:1, ingredient_name:"Sugar", ingredient_portion: 2.5, recipe_id: 1
      }, {id: 2, ingredient_name:"Onion", ingredient_portion: 4, recipe_id: 3}, {id: 3, ingredient_name:"Potatoes", ingredient_portion: 5, recipe_id: 4}, {id: 4, ingredient_name:"flour", ingredient_portion: 2, recipe_id: 1}]
      return knex('ingredients').insert(ingredients);
    });
};

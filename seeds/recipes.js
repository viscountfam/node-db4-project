
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      const recipes = [ {
        id: 1, Name:"Apple Pie", Description:"An American classic. The most american dessert there is."
      }, {id: 2, Name:"Dirty Rice", Description:"It's good"}, {id:3, Name:"Hambuger", Description:"Nice and simple"}, {id: 4, Name:"French Fries", Description:"THey aren't really French but the do taste good"}, ]
      return knex('recipes').insert(recipes);
    });
};

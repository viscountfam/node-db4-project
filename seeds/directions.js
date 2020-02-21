
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directions').truncate()
    .then(function () {
      // Inserts seed entries
      const directions = [{id: 1, direction:"pour the apple mush into the pie mold", estimated_time_direction: "10 minutes", recipe_id: 1}, {id: 2, direction:"place the pie in the oven for 40 minutes", estimated_time_direction: "40 minutes", recipe_id: 1}, {id: 3, direction:"mash the apples into mush", estimated_time_direction: "12 minutes", recipe_id: 1}]
      return knex('directions').insert(directions);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pokemon", (table) => {
    table.increments();
    table.string("name");
    table.integer("type_id");
    table.integer("favourite_pokemon_food_id");
    table.foreign("type_id").references("type.id");
    table.foreign("favourite_pokemon_food_id").references("pokemon_food.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("pokemon", (table) => {
      table.dropForeign("type_id");
      table.dropForeign("favourite_pokemon_food_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("pokemon");
    });
};

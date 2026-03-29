/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("name");
    table.string("password");
    table.string("theme");
    table.integer("favourite_pokemon_id");
    table.foreign("favourite_pokemon_id").references("pokemon.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("users", (table) => {
      table.dropForeign("favourite_pokemon_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("users");
    });
};

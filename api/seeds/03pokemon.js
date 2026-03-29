/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  let foodMax = 12

  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE pokemon CASCADE")
  await knex('pokemon').del()
  await knex('pokemon').insert([
    {id: 1, name: 'Pikachu', type_id: 8, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 2, name: 'Charmander', type_id: 2, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 3, name: 'Squirtle', type_id: 4, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 4, name: 'Bulbasaur', type_id: 6, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 5, name: 'Geodude', type_id: 11, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 6, name: 'Machop', type_id: 3, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 7, name: 'Gastly', type_id: 15, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 8, name: 'Alakazam', type_id: 10, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 9, name: 'Rattata', type_id: 1, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 10, name: 'Pidgeot', type_id: 5, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 11, name: 'Beedrill', type_id: 13, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 12, name: 'Sandshrew', type_id: 9, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 13, name: 'Jynx', type_id: 12, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 14, name: 'Dragonair', type_id: 14, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 15, name: 'Umbreon', type_id: 16, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 16, name: 'Lucario', type_id: 17, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 17, name: 'Togekiss', type_id: 18, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
    {id: 18, name: 'Toxicroak', type_id: 7, favourite_pokemon_food_id: Math.floor((Math.random() * foodMax) + 1)},
  ]);
};



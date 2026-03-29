/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex.schema.raw("TRUNCATE pokemon_food CASCADE")
  await knex('pokemon_food').del()
  await knex('pokemon_food').insert([
    {id: 1, name: 'Moomoo Milk'},
    {id: 2, name: 'Egg Bomb Curry'},
    {id: 3, name: 'Pink Pokeblock'},
    {id: 4, name: 'Mild Honey Curry'},
    {id: 5, name: 'Steadfast Ginger Cookies'},
    {id: 6, name: 'Craft Soda Pop'},
    {id: 7, name: 'Jigglypuff\'s Fruity Flan'},
    {id: 8, name: 'Lovely Kiss Smoothie'},
    {id: 9, name: 'Sweet Scent Chocolate Cake'},
    {id: 10, name: 'Big Malasada'},
    {id: 11, name: 'Flower Gift Macarons'},
    {id: 12, name: 'Clodsire Eclair'},
  ]);
};

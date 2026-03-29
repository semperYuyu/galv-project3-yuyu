/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
require('dotenv').config()
let bcrypt = require('bcrypt')

exports.seed = async function (knex) {
  let pokeMax = 18
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE users CASCADE")
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'yuyu', password: 'passwordYuyu', theme: 'light', favourite_pokemon_id: 16},
    {id: 2, name: 'notYuyu', password: 'passwordNotYuyu', theme: 'dark', favourite_pokemon_id: 7},
  ]);
};

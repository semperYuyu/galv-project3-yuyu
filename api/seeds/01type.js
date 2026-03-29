/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // migrations work, need to seed data now :D

  await knex.schema.raw("TRUNCATE type CASCADE");
  await knex("type").del();
  await knex("type").insert([
    { id: 1, type: "Normal" },
    { id: 2, type: "Fire" },
    { id: 3, type: "Fighting" },
    { id: 4, type: "Water" },
    { id: 5, type: "Flying" },
    { id: 6, type: "Grass" },
    { id: 7, type: "Poison" },
    { id: 8, type: "Electric" },
    { id: 9, type: "Ground" },
    { id: 10, type: "Psychic" },
    { id: 11, type: "Rock" },
    { id: 12, type: "Ice" },
    { id: 13, type: "Bug" },
    { id: 14, type: "Dragon" },
    { id: 15, type: "Ghost" },
    { id: 16, type: "Dark" },
    { id: 17, type: "Steel" },
    { id: 18, type: "Fairy" },
  ]);
};

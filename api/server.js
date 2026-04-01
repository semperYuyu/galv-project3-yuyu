const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const server = express();
const PORT = 8080;
const loginLength = 24 * 60 * 60 * 1000; // 1 day
const knex = require("knex")(require("./knexfile.js")["development"]);
const bcrypt = require("bcrypt");
require("dotenv").config();

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
server.use(express.json());
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/favicon.ico", (req, res) => {
  return res.status(204).end();
});

server.post("/myPoke", (req, res) => {
  let { userCookie } = req.body;
  console.log("omg someone wants a pokemon");
  console.log(userCookie);

  return knex("users")
    .select("favourite_pokemon_id", "theme")
    .where({ name: userCookie })
    .then((data) => {
      let { favourite_pokemon_id, theme } = data[0];
      console.log(data);
      return knex("pokemon")
        .select("name")
        .where({ id: favourite_pokemon_id })
        .then((data) => res.status(200).send({ message: {name: data[0].name, theme} }));
    });
});

server.post("/auth", async (req, res) => {
  console.log("omg theyre loggin in");
  let { user, password } = req.body;

  return knex("users")
    .select("password")
    .where({ name: user })
    .then((data) => {
      bcrypt.compare(password, data[0].password).then((data) => {
        if (data == true) {
          res.cookie("user", user, {
            maxAge: loginLength,
          });

          res
            .status(200)
            .send({ message: "successfully logged in! go back home now pls" });
        } else {
          return res.status(200).send({ message: "your password is WRONG" });
        }
      });
    })
    .catch(() =>
      res.status(200).send({ message: "that user no exist; try register !" }),
    );
});

server.post("/register", async (req, res) => {
  console.log("omg theyre registerin");
  let { user, password, pokemon } = req.body;
  let count = await knex("users").count("* as total");
  let total = count[0].total;

  let hashPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_HASHES),
  );

  return knex("users")
    .select("*")
    .where({ name: user })
    .then((data) => {
      if (!data.length == 0) {
        res.status(200).send({ message: "that user already exists !!!" });
      } else {
        return knex("users")
          .insert(
            {
              id: total + 2,
              name: user,
              password: hashPassword,
              theme: "light",
              favourite_pokemon_id: pokemon,
            },
            ["id", "name", "favourite_pokemon_id"],
          )
          .then(() => {
            res.cookie("user", user, {
              maxAge: loginLength,
            });
            res.status(200).send({
              message: `user ${user} created and logged in !! now go home !!!`,
            });
          });
      }
    });
});

server.get("/:table", (req, res) => {
  console.log("omg a get");
  let { table } = req.params;

  if (table == "users") {
    return knex("users")
      .select("id", "name", "theme", "favourite_pokemon_id")
      .then((data) => res.status(200).send({ message: data }))
      .catch(() => res.status(200).send("sowwy that doesnt exist"));
  } else {
    return knex(table)
      .select("*")
      .then((data) => res.status(200).send({ message: data }))
      .catch(() => res.status(200).send("sowwy that doesnt exist"));
  }
});

server.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "tables are pokemon, pokemon_food, users, and type" });
});

server.post("/:table", (req, res) => {
  console.log("omg a post");
  let { table } = req.params;
  let { id } = req.body;
  console.log(req.body);

  if (!id) {
    return res
      .status(200)
      .send({ message: "You need an id in your body to post D: D: D:" });
  }

  switch (table) {
    case "users":
      propArr = ["name", "theme", "favourite_pokemon_id"];
      break;

    case "pokemon":
      propArr = ["name", "type_id", "favourite_pokemon_food_id"];
      break;

    case "pokemon_food":
      propArr = ["name"];
      break;

    case "type":
      propArr = ["type"];
      break;

    default:
      break;
  }

  for (let i in req.body) {
    console.log(i);
    for (let prop of propArr) {
      if (i == "prop") {
        counted++;
      }
    }
  }

  return knex(table)
    .select("*")
    .where({ id })
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        console.log("nope sowwy ");
        res.status(200).send({ message: "sowwy that already exists" });
      } else {
        return knex(table)
          .insert(req.body)
          .then(() =>
            knex(table)
              .select("*")
              .then((data) => res.status(200).send({ message: data })),
          )
          .catch(() =>
            res
              .status(200)
              .send({ message: "you're in the wrong table you goober !" }),
          );
      }
    });
});

server.patch("/:table", (req, res) => {
  console.log("omg a patch");
  let { table } = req.params;
  let { id } = req.body;
  let propArr;
  let {
    name,
    type,
    theme,
    favourite_pokemon_id,
    type_id,
    favourite_pokemon_food_id,
  } = req.body;

  let propObj = {
    name,
    type,
    theme,
    favourite_pokemon_id,
    type_id,
    favourite_pokemon_food_id,
  };

  let counted = 0;

  switch (table) {
    case "users":
      propArr = ["name", "theme", "favourite_pokemon_id"];
      break;

    case "pokemon":
      propArr = ["name", "type_id", "favourite_pokemon_food_id"];
      break;

    case "pokemon_food":
      propArr = ["name"];
      break;

    case "type":
      propArr = ["type"];
      break;

    default:
      break;
  }

  propArr = propArr.filter((elem) => propObj[elem] != undefined);

  for (let i in req.body) {
    console.log(i);
    for (let prop of propArr) {
      if (i == prop) {
        counted++;
      }
    }
  }

  if (counted == 0) {
    return res
      .status(200)
      .send({ message: "either wrong table or not enough info !" });
  }

  if (!id) {
    return res
      .status(200)
      .send({ message: "You need an id in your body to patch D: D:D:" });
  }

  Promise.all(
    propArr
      .filter((elem) => propObj[elem] !== undefined)
      .map((elem) =>
        knex(table)
          .where("id", id)
          .update({ [elem]: propObj[elem] }, propArr)
          .catch(() => res.status(200).send({ message: "out of index !" })),
      ),
  ).then((data) =>
    res
      .status(200)
      .send({ message: JSON.stringify(data) + " updated successfully !!" }),
  );
});

server.delete("/:table", (req, res) => {
  let { table } = req.params;
  let { id } = req.body;
  console.log("omg a del");

  if (!id) {
    return res
      .status(200)
      .send({ message: "you need an id in your body to delete D: D: D:" });
  }

  knex(table)
    .where({ id })
    .del()
    .then(() =>
      knex(table)
        .select("*")
        .then((data) => res.status(200).send({ message: data })),
    );
});

server.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}/ :D`);
});

const express = require("express");
const server = express();
const PORT = 8080;
const knex = require("knex")(require("./knexfile.js")["development"]);

server.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

server.get("/:table", (req, res) => {
  let { table } = req.params;
  knex(table)
    .select("*")
    .then((data) => res.status(200).send(data))
    .catch(() => res.status(200).send("sowwy that doesnt exist"));
});

server.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}/ :D`);
});

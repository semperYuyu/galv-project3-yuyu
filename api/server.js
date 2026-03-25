const express = require("express");
const server = express();
const PORT = 8080;

server.get("/", (req, res) => {
  res.status(200).send(":D :3");
});

server.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}/ :D`);
});

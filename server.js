const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");
const { response } = require("express");

const port = 3000;

//TODO
app.get("/musicians", async (request, response) => {
  const musician = await Musician.findAll();
  response.json(musician);
});

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

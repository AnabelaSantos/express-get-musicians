const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");
const { response } = require("express");

const port = 3000;

//TODO
app.get("/musicians/:id", async (request, response, next) => {
  const musician = await Musician.findByPk(request.params.id); // retrieve musician object from the DB by its id
  response.json(musician);
});

// app.get("/musicians/:id", async (request, response, next) => {
//   try {
//     const musician = await Musician.findByPk(request.params.id);
//     if (!musician) {
//       response.status(404).send("MUsician not found"); // there's no musician in the requested id so a 404 error is responded and a message sent
//     } else {
//       response.json(musician); // sends the respective data of that id
//     }
//   } catch (err) {
//     console.log(err);
//     response.status(500).send("Internal server error");
//   }
// });

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

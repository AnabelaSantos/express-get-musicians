const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");
const { response } = require("express");

const port = 3000;

//TODO
app.get("/musicians", async (request, response, next) => {
  const musician = await Musician.findAll(); // retrieve musician object from the DB by its id
  response.json(musician);
});

// app.get("/musicians/:id", async (request, response, next) => {
//   try {
//     const musician = await Musician.findByPk(request.params.id);
//     if (!musician) {
//       throw new Error("Musician id not found");
//       // there's no musician in the requested id so a 404 error is responded and a message sent
//     }
//     response.json(musician); // sends the respective data of that id
//   } catch (error) {
//     // console.log(err);
//     response.status(404).send(error.message);
//   }
// });

app.use(express.json());
app.post("/musicians", async (req, res) => {
  const { name, instrument } = req.body;
  if ((name, instrument)) {
    await Musician.create({
      name: name,
      instrument: instrument,
    });
    res.json("Put Successful!");
  }
});

app.use(express.json());
app.put("/musicians/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  musician.update({
    name: req.body.name,
    instrument: req.body.instrument,
  });
  res.json("Put Successful!");
});

app.use(express.json());
app.delete("/musicians/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  musician.destroy();
  res.json("Delete Successful!");
});

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

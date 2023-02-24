const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");
const { response } = require("express");

const port = 3000;
app.use(express.json());
const musicianRouter = require("./routers/musicRouter");

app.use("/musicians", musicianRouter);

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

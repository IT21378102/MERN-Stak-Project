//

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");
const app = express();

//Midd1eware
app.use(express.json());
app.use("/users", router);

mongoose
  .connect(
    "mongodb+srv://Herath:uwhqwoKTZAOcbWtk@cluster0.lyaxta7.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDb"))
  .then(() => {
    app.listen(5001);
  })
  .catch((err) => console.log(err));

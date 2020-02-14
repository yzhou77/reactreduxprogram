const express = require("express");
const app = express();
const mongoose = require("mongoose");
const tracks = require("./routes/trackroutes");
var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", tracks);

//connect to DB
const db = "mongodb://localhost:27017/mongo-tracks";
mongoose.connect(db, err => {
  if (err) {
    console.log("Error!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});

//Default route
app.get("/", (req, res) => {
  res.send("Default Route");
});

const port = 7000;
app.listen(port, () => console.log("Listening on port" + port));

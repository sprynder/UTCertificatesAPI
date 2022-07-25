//minor object
//I can get a list of all UT miners
// I can get miners by school
// I can get a miner by name

// /miners  GET  Displays all miners
// /miners/:name GET gets a specific miner
// /miners/:school  GET Displays all the miners for a specific school

const express = require("express");
require('dotenv').config();
const routes = require('./routes/minors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

mongoose.connect(
  process.env.MONGODB_URI,
  function (err) {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);


const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use('/', routes)

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});
// app.get("/", function (req, res) {
//     res.send(JSON.stringify("wow"));
//   });

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
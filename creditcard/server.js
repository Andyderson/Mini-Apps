const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const mongodb = require("./database/index.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.listen(1337, () => {
  console.log("Loading on port 1337!");
});

app.post("/profile", (req, res) => {
  console.log("Express Post Success", req.body);
  var myData = mongodb.Profile({
    name: req.body.name,
    ccNum: req.body.ccNum,
    expMonth: req.body.expMonth,
    expYear: req.body.expYear,
    cvc: req.body.cvc
  });

  myData
    .save()
    .then(data => {
      res.send("Data Successfully Saved");
      console.log(data);
    })
    .catch(error => {
      res.status(400).send("Data Save Unsuccessful");
      console.log(error);
    });
});

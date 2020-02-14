const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const peopleTable = require("./routes/people");
var app = express();
app.use(bodyParser.json());
app.use("/people", peopleTable);
app.listen(3000);

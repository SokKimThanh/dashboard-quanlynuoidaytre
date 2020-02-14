const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", function(req, res) {
  mysqlConnection.query("SELECT * FROM tasks", function(err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
      console.log(err);
    }
  });
});

module.exports = Router;

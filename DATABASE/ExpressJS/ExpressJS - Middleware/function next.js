var express = require("express");
var app = express();
//First middleware before response is sent
app.use(function(req, res, next) {
  console.log("Start");
  next();
});
//Simple request time logger
app.use(function(req, res, next) {
  req.time = Date.now();
  console.log("A new request received at " + Date.now());

  //This function call is very important. It tells that more processing is
  //required for the current request and is in the next middleware
  //function/route handler.
  next();
});
app.get("/", function(req, res, next) {
  res.send(`Time logger: ${req.time}`);
  req.time = Date.now();
  next();
});
app.use("/", function(req, res, next) {
  console.log(`End ${req.time}`);
  next();
});
app.use("/", function(req, res) {
  console.log("Again?");
});
app.listen(3000);

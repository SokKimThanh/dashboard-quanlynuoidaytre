var express = require("express");
var router = express.Router();
router.get("/", function(req, res) {
  res.send("GET route on the thing.");
});
router.post("/", function(req, res) {
  res.send("POST route onthe thing.");
});
module.exports = router;

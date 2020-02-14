var express = require("express");
var app = express();
var path = require("path");

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/dynamic_view/:id([0-9]{5})", function(req, res, next) {
  req.dynamic = {
    name: "TutorialsPoint",
    url: "http://www.tutorialspoint.com",
    id: req.params.id
  };
  next();
});
app.get("/dynamic_view/:id", function(req, res) {
  res.render("dynamic_view", {
    name: req.dynamic.name,
    url: req.dynamic.url,
    id: req.dynamic.id
  });
});

app.get("/dynamic_view", function(req, res) {
  res.render("conditional", {
    user: { name: "ashe".toUpperCase(), age: "20" }
  });
});

app.get("/components", function(req, res) {
  res.render("html/content");
});

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/static", function(req, res) {
  res.render("static");
});
app.listen(3000);

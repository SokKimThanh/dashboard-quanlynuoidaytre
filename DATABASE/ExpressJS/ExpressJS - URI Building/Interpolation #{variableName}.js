var express = require("express");
var app = express();
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

app.listen(3000);

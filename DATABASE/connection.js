const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Sfg2708",
  database: "dashboard",
  multipleStatements: true
});
mysqlConnection.connect(function(err) {
  if (!err) {
    console.log(`Connected!`);
  } else {
    console.log(`Connection Failed!`);
  }
});
module.exports = mysqlConnection;

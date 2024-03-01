const mysql = require("mysql2");

require("dotenv").config();

var hostname = process.env.DB_HOST;
var database = process.env.DB_NAME;
var port = process.env.PORT;
var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;

var dbPool = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

dbPool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

dbPool.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});

module.exports = dbPool.promise();

'use strict';

// DATABASE CONNECTION
// ---------------------------------------------------------------

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "node_blog"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




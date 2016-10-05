import helper from "helper.js";

var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }

  console.log('Connected');
});
  var help = new Helper();
  var status_connected = help.Status.Connected;
  console.log(status_connected);
  var sqlQuery = con.query
  (
      `CREATE TABLE NodeTable 
      (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(50),
        location varchar(50),
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5`
  , function(error){console.log(error);});
con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.

});
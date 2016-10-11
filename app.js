'use strict'

// var autoload = require('autoload')

// autoload.autoload(__dirname, [autoload.registeredGlobalsAutoloader(require)], function () {
//   // << your regular code goes here >>
// })

var MySqlConnection = require('./src/MySqlConnection.js')
var ConnectionString = require('./src/ConnectionString.js')

var connString = new ConnectionString(
  'localhost',
  '3306',
  'root',
  '',
  'nodejs'
)
// var Helper = require("./src/Helper.js");

var MySqlConn = new MySqlConnection(connString) // eslint-disable-line

// connection.query('SELECT 1', function(err, rows) {
//   // connected! (unless `err` is set)
// });
MySqlConn.Connection.query("insert into nodetable values('1', 'tony', 'bountiful')", function (err) {
  if (err) { console.log(err.stack) }
})

MySqlConn.Connection.query('select * from nodetable', function (err, res, fields) {
  if (err) {
    console.log('select statement failed' + err.stack)
    return
  }
  console.log(fields)
})

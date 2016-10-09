'use strict'

// var autoload = require('autoload')

// autoload.autoload(__dirname, [autoload.registeredGlobalsAutoloader(require)], function () {
//   // << your regular code goes here >>
// })

var MySqlConnection = require('./src/MySqlConnection.js')
var ConnectionString = require('./src/ConnectionString.js')

var connString = new ConnectionString(
  'localhost',
  '3307',
  'root',
  'root',
  'nodejs'
)

// var Helper = require("./src/Helper.js");

var MySqlConn = new MySqlConnection(connString) // eslint-disable-line

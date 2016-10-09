'use strict'

var MySql = require('mysql')
var ConnectionString = require('./ConnectionString')
var String = require('./String.js')

module.exports = class MySqlConnection {

  constructor (connectionString) {
    // First you need to create a connection to the db
    if (!connectionString instanceof ConnectionString) {
      console.log(`Parameter 'connectionString' is not a ConnectionString class`)
      return
    }
    // var host = String.isNullOrEmpty(connectionString['host']) ? String.Empty : connectionString['host'];
    if (String.IsNullOrEmpty(connectionString['host']) ||
        String.IsNullOrEmpty(connectionString['port']) ||
        String.IsNullOrEmpty(connectionString['user'])) { return }
    var host = connectionString['host']
    var port = connectionString['port']
    var user = connectionString['user']

    var password = !String.IsNullOrEmpty(connectionString['password']) ? connectionString['password'] : String.Empty
    var db = !String.IsNullOrEmpty(connectionString['database']) ? connectionString['database'] : String.Empty

    console.log(host)
    this.Connection = MySql.createConnection(
      {
        host: host,
        port: port,
        user: user,
        password: password,
        database: db
      }
    )

    this.Connection.connect(function (err) {
      if (err) {
        console.log('Error connecting to Db')
        return
      }

      console.log('Connected')
    })
  }

  static get Connection () {
    return {
      Status: {
        Connected: 'Connected',
        Disconnect: 'Disconnected'
      }
    }
  }
}

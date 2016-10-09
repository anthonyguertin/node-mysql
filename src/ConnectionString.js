'use strict'

var String = require('./String.js')
module.exports = class ConnectionString {
  constructor (host, port, user, password, database) {
    this.host = String.IsNullOrEmpty(host) ? String.Empty : host
    this.port = String.IsNullOrEmpty(port) ? String.Empty : port
    this.user = String.IsNullOrEmpty(user) ? String.Empty : user
    this.password = String.IsNullOrEmpty(password) ? String.Empty : password
    this.database = String.IsNullOrEmpty(database) ? String.Empty : database
  }
}

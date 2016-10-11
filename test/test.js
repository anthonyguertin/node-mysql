/* eslint-env node, mocha */
var assert = require('assert')
var String = require('../src/String')
// var mocha = require('assert')

describe('node-mysql-sample/src/', function () {
  var ConnectionString = require('../src/ConnectionString')
  var connString = new ConnectionString('localhost', '3306', 'root', '', String.Empty)

  describe('ConnectionString', function () {
    it('should build a connectionstring object', function () {
      assert.equal(connString.host, 'localhost')
      assert.equal(connString.port, '3306')
      assert.equal(connString.user, 'root')
      assert.equal(connString.password, '')
      assert.equal(connString.database, String.Empty)
    })
  })

  describe('MySqlConnection', function () {
    var MySqlConnection = require('./../src/MySqlConnection.js')
    var mySqlConn = new MySqlConnection(connString)
    it('should connect and query the database', function () {
      mySqlConn.Connection.query('SELECT * FROM nodetable', function (err, res, fields) {
        assert.equal(err, null)
        assert.equal(mySqlConn.Connection.State, mySqlConn.ConnectionState.Connected)
        assert.notEqual(res, null)
        assert.notEqual(fields, null)
      })
    })
  })
})

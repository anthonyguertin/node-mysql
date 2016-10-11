var mocha = require('mocha')

mocha.describe('node-mysql-sample', function () {
  mocha.after(function () {
    console.log('hello testing world')
  })
})

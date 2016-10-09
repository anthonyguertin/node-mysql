'use strict'

module.exports = class String {
  static get Empty () {
    return ''
  }

  static IsNullOrEmpty (theString) {
    if (theString == null || theString === '') {
      return true
    }
    return false
  }
}

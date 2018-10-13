'use strict'

module.exports = function Unsafe(string) {
  if (!(this instanceof Unsafe)) return new Unsafe(string)
  this.string = string
}

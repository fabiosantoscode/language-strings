'use strict'

const Unsafe = require('../unsafe')

const escaper = escapeFn =>
  function escaper(strings/*, ...interpolations */) {
    const escapeIfNecessary = s => s instanceof Unsafe
      ? s.string
      : escapeFn(s)
    const interpolations = [].slice.call(arguments, 1)
    return strings.reduce((finalString, current) =>
      finalString + current + (
        interpolations.length
          ? escapeIfNecessary(interpolations.shift())
          : '')
    , '')
  }

module.exports = escaper


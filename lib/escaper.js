
const escaper = escapeFn =>
  function escaper(strings/*, ...interpolations */) {
    const interpolations = [].slice.call(arguments, 1)
    return strings.reduce((finalString, current) =>
      finalString + current + (
        interpolations.length
          ? escapeFn(interpolations.shift())
          : '')
    , '')
  }

module.exports = escaper


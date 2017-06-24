'use strict'

const escapeHtml = require('escape-html')
const escapeShell = require('shell-escape')
const escapeCss = require('css.escape')

const escaper = escapeFn => (strings, ...interpolations) =>
  strings.reduce((finalString, current) =>
    finalString + current + (
      interpolations.length
        ? escapeFn(interpolations.shift())
        : '')
  , '')

exports.html = escaper(escapeHtml)

exports.shell = escaper(s => escapeShell([s]))

exports.css = escaper(escapeCss)


const escapeHtml = require('escape-html')
const escaper = require('./lib/escaper')

module.exports = escaper(escapeHtml)

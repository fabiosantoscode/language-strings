const escapeShell = require('shell-escape')
const escaper = require('./lib/escaper')

module.exports = escaper(s => escapeShell([s]))

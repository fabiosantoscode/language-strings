# Language Strings

[![Build Status](https://travis-ci.org/fabiosantoscode/language-strings.svg?branch=master)](https://travis-ci.org/fabiosantoscode/language-strings)

Interpolate safely in several languages using ES6 template literals.

```javascript
const strings = require('language-strings')

strings.html`<div>${unsafeValue}</div>`
strings.shell`echo ${unsafeValue} | xargs...`
strings.css`content: "${unsafeValue}"`
strings.css`background: url(data:image/svg+xml,${svg})`
strings.url`/foo/bar/${valueWithMaybeSlashes}`
```

You can also require the functions individually to save space if you're writing frontend code.

```javascript
const html = require('language-strings/html')

html`<span>${unsafeValue}</span>`
```


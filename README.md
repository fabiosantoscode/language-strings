# Language Strings

Interpolate safely in several languages using ES6 template literals.

```
const strings = require('language-strings')

strings.html`<div>${unsafeValue}</div>`
strings.shell`echo ${unsafeValue} | xargs...`
strings.css`content: "${unsafeValue}"`
strings.css`background: url(data:image/svg+xml,${svg})`
```


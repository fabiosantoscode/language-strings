'use strict'

const languageStrings = require('..')
const assert = require('assert')

describe('require("language-strings")', () => {
  it('escapes HTML', () => {
    assert.equal(
      languageStrings.html`<div class="${'<b>'}">${'hello<'}`,
      '<div class="&lt;b&gt;">hello&lt;'
    )
  })
  it('escapes bash', () => {
    assert.equal(
      languageStrings.shell`echo foo-${'bar baz'}`,
      `echo foo-'bar baz'`
    )
  })
  it('escapes CSS', () => {
    assert.equal(
      languageStrings.css`* { background: url(${'http://www.placecage.com/200/300'}); }`,
      String.raw`* { background: url(http\:\/\/www\.placecage\.com\/200\/300); }`
    )
  })
  it('escapes URL components', () => {
    assert.equal(
      languageStrings.url`/foo/${'foo/bar'}`,
      '/foo/foo%2Fbar'
    )
  })
  it('respects unsafe strings', () => {
    const unsafeStr = languageStrings.unsafe('<unsafe>')
    assert.equal(
      languageStrings.html`<div>${unsafeStr}</div>`,
      '<div><unsafe></div>'
    )
  })
})

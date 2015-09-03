var ghApiHeaders = require('../')
var test = require('tape')

test('provides default headers for GitHub API requests', function (t) {
  t.deepEqual(ghApiHeaders(), { accept: 'application/vnd.github.v3+json' })
  t.deepEqual(ghApiHeaders({
    token: '...',
    headers: {
      'user-agent': 'foo'
    }
  }), {
    accept: 'application/vnd.github.v3+json',
    authorization: 'token ...',
    'user-agent': 'foo'
  })
  t.end()
})

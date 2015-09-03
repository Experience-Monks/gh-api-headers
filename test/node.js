var ghApiHeaders = require('../')
var test = require('tape')

test('provides default headers for GitHub API requests', function (t) {
  t.deepEqual(ghApiHeaders(), { accept: 'application/vnd.github.v3+json', 'user-agent': 'https://github.com/Jam3/gh-api-headers' })

  var headers = { 'foo': 'bar', accept: '' }
  t.equal(ghApiHeaders({
    headers: headers
  }), headers, 'header object strictly equals')

  t.deepEqual(ghApiHeaders({ token: '...' }), { accept: 'application/vnd.github.v3+json', authorization: 'token ...', 'user-agent': 'https://github.com/Jam3/gh-api-headers' })
  t.deepEqual(ghApiHeaders({
    token: '...',
    headers: { accept: 'boop', 'user-agent': 'beep' }
  }), { accept: 'boop', authorization: 'token ...', 'user-agent': 'beep' },
    'does not mutate lower case headers')

  t.deepEqual(ghApiHeaders({
    token: '...',
    headers: { Accept: 'boop', 'User-Agent': 'beep' }
  }), { Accept: 'boop', 'User-Agent': 'beep', authorization: 'token ...' },
    'does not mutate upper case headers')

  t.deepEqual(ghApiHeaders({
    method: 'PUT'
  }), { accept: 'application/vnd.github.v3+json', 'content-length': 0, 'user-agent': 'https://github.com/Jam3/gh-api-headers' },
    'sets content-length to zero if not specified')

  t.deepEqual(ghApiHeaders({
    method: 'PUT',
    headers: { 'Content-Length': 5 }
  }), { accept: 'application/vnd.github.v3+json', 'content-length': 0, 'user-agent': 'https://github.com/Jam3/gh-api-headers' },
    'sets content-length to zero if not specified')
  t.end()
})

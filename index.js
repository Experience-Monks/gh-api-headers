// excluded in the browser
var defaultUserAgent = require('./user-agent.js')

module.exports = ghApiHeaders
function ghApiHeaders (opts) {
  opts = opts || {}

  var headers = opts.headers || {}
  var token = opts.token
  if (token) {
    headers.authorization = 'token ' + token
  }

  // https://developer.github.com/v3/#http-verbs
  if (!opts.body && opts.method && /^put$/i.test(opts.method)) {
    delete headers['Content-Length']
    headers['content-length'] = 0
  }

  // user agent is only valid in node
  if (typeof defaultUserAgent === 'string') {
    ensureHeader(headers, 'User-Agent', defaultUserAgent)
  }

  // lock version to v3
  ensureHeader(headers, 'Accept', 'application/vnd.github.v3+json')
  return headers
}

function ensureHeader (headers, key, value) {
  var lower = key.toLowerCase()
  if (typeof headers[key] === 'undefined' && typeof headers[lower] === 'undefined') {
    headers[lower] = value
  }
}

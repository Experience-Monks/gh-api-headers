# gh-api-headers

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Provides default headers for GitHub v3 API requests in Node and the browser. 

Mostly used internally across modules. See [gh-api-stream](https://github.com/Jam3/gh-api-stream) and [gh-api](https://github.com/Jam3/gh-api) for more practical implementations.

## Install

```sh
npm install gh-api --save
```

## Example

You can pass a `token`, as well as any options you might pass to [request](npmjs.com/package/request) or [xhr](npmjs.com/package/xhr). Examples: `body`, `method`, and `headers` overrides.

```js
var getHeaders = require('gh-api-headers')
var headers = getHeaders({ token: '...' })
```

Result in Node:

```js
{ 
  accept: 'application/vnd.github.v3+json',
  authorization: 'token ...', 
  'user-agent': 'https://github.com/Jam3/gh-api-headers'
}
```

In the browser, `user-agent` is ignored.

```js
{ 
  accept: 'application/vnd.github.v3+json',
  authorization: 'token ...', 
}
```

## Usage

[![NPM](https://nodei.co/npm/gh-api-headers.png)](https://www.npmjs.com/package/gh-api-headers)

#### `headers = getHeaders([opt])`

Takes options for a request and returns `headers` object that will be suitable for the GitHub v3 API.

All params are optional.

- `token` - the GitHub authorization token
- `headers` - an object of headers to use by default for `User-Agent` and `Accept` (lower case keys also valid)
- `method` - if set to `"PUT"` and `body` is empty, `Content-Length` header will be set to zero
- `body` - if truthy, content-length will not be changed on `PUT` requests

If `headers` is passed, the returned headers object will be the same but with any defaults mixed in.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/gh-api-headers/blob/master/LICENSE.md) for details.

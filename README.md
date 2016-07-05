
# actionkey

> Creates a namespaced object enum for events/actions/messages

[![Build Status](https://travis-ci.org/mattstyles/actionkey.svg?branch=composer)](https://travis-ci.org/mattstyles/actionkey)
[![npm version](https://badge.fury.io/js/actionkey.svg)](https://badge.fury.io/js/actionkey)
[![Dependency Status](https://david-dm.org/mattstyles/actionkey.svg)](https://david-dm.org/mattstyles/actionkey)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

Install with [npm](https://npmjs.com)

```sh
$ npm i -S actionkey
```

## Example

```js
const actionkey = require('actionkey')

const EVENTS = actionkey('APP', [
  'QUIT'
])

// {
//   QUIT: 'APP_QUIT'
// }
```

## Usage

`actionkey` just needs an array or an object of keys to mirror, the returned object will be frozen.

```js
const ACTIONS = actionkey([
  'RESET',
  'APPEND',
  'DELETE'
])

const ACTIONS = actionkey({
  'RESET': null,
  'APPEND': null,
  'DELETE': null
})
```

`actionkey` can also accept namespace to append to keys and will return an object with the relevant values mapped to the keys plus the namespace. It can accept either an array of keys or an object to map.

```js
const ACTIONS = actionkey('ACTION', [
  'RESET',
  'APPEND',
  'DELETE'
])

const ACTIONS = actionkey('ACTION', {
  'RESET': null,
  'APPEND': null,
  'DELETE': null
})
```

## Running tests

```sh
$ npm install
$ npm test
```

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `npm test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/actionkey).

## License

MIT

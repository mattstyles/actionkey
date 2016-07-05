
'use strict'

const isArray = require('util').isArray

function fold (name) {
  let ns = name
    ? name + '_'
    : ''
  return (out, key) => {
    out[key] = ns + key
    return out
  }
}

function mapArray (keys, ns) {
  return keys.reduce(fold(ns), {})
}

function mapObject (keys, ns) {
  return Object.keys(keys).reduce(fold(ns), {})
}

module.exports = function actionkey (ns, keys) {
  if (isArray(ns)) {
    return Object.freeze(mapArray(ns, ''))
  }
  if (typeof ns === 'object') {
    return Object.freeze(mapObject(ns, ''))
  }
  if (typeof ns === 'string') {
    if (isArray(keys)) {
      return Object.freeze(mapArray(keys, ns))
    }
    if (typeof keys === 'object') {
      return Object.freeze(mapObject(keys, ns))
    }
  }

  throw new Error('Invalid arguments passed to actionkey')
}

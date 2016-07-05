
'use strict'

const tape = require('tape')
const actionkey = require('./')

let output = {
  'FOO': 'FOO'
}

let nsOutput = {
  'FOO': 'BAR_FOO'
}

tape('It should accept an array of keys and return an object', t => {
  t.plan(1)

  t.deepEqual(output, actionkey(['FOO']))
})

tape('It should accept an objects and return an object', t => {
  t.plan(1)

  t.deepEqual(output, actionkey({'FOO': null}))
})

tape('It should accept a namespace for values', t => {
  t.plan(2)

  t.deepEqual(nsOutput, actionkey('BAR', ['FOO']))
  t.deepEqual(nsOutput, actionkey('BAR', {'FOO': null}))
})

tape('It should return a frozen object', t => {
  t.plan(1)

  let action = actionkey(['FOO'])
  t.throws(() => {
    action.FOO = 'BAR'
  })
})

tape('It should throw an error if invalid arguments are passed', t => {
  t.plan(2)

  t.throws(() => {
    actionkey(null)
  })
  t.throws(() => {
    actionkey('wizz', 'pop')
  })
})

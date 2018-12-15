import * as assert from 'assert'

import deepFreeze from './deep-freeze'

describe('deepFreeze', () => {
  it('1 depth', () => {
    const target = {
      foo: 1,
      bar: 'abc',
    }
    deepFreeze(target)
    assert.throws(() => {
      target.foo = 2
    })
  })
  it('2 depth', () => {
    const target = {
      foo: {
        bar: 1,
        buz: 'abc',
      },
    }
    deepFreeze(target)
    assert.throws(() => {
      target.foo.bar = 2
    })
  })
})

import * as assert from 'assert'

import * as Drink from './drink'

describe('Drink.factory', () => {
  it('returns Drink', () => {
    const item = Drink.factory(0)
    assert(item.name === 'coffee')
    assert(item.price === 120)
  })
  it('asserts with non-exist id', () => {
    assert.throws(() => {
      const item = Drink.factory(3942)
    })
  })
})

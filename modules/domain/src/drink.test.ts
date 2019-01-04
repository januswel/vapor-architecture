import * as assert from 'assert'

import * as Drink from './drink'

describe('Drink', () => {
  describe('getById', () => {
    it('returns Entity', () => {
      const drink = Drink.getById(0)
      assert(drink.id === 0)
      assert(drink.name === 'coffee')
      assert(drink.imageUrl === 'http://localhost:3000/images/coffee.png')
    })
    it('asserts with non-exist id', () => {
      assert.throws(() => {
        const item = Drink.getById(3942)
      })
    })
  })

  describe('getAll', () => {
    const drinks = Drink.getAll()
    assert(Object.keys(drinks).length === 3)
    const drink = drinks[0]
    assert(drink.id === 0)
    assert(drink.name === 'coffee')
    assert(drink.imageUrl === 'http://localhost:3000/images/coffee.png')
  })
})

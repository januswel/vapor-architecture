import * as assert from 'assert'

import * as Inventory from './inventory'

const seeds = [0, 1]

describe('Inventory', () => {
  describe('factory', () => {
    it('returns inventory', () => {
      const inventory = Inventory.factory(seeds)
      assert(Object.keys(inventory).length === 2)
      assert(inventory[0].id === 0)
      assert(inventory[0].drink.id === 0)
      assert(inventory[0].drink.name === 'coffee')
      assert(inventory[0].price === 120)
      assert(inventory[0].remains === 10)
    })
  })
})

import * as assert from 'assert'

import * as Item from './item'

describe('Item', () => {
  describe('factory', () => {
    it('returns Entity', () => {
      const item = Item.factory(0, 0, 120, 2)
      assert(item.id === 0)
      assert(item.drinkId === 0)
      assert(item.drink.name === 'coffee')
      assert(item.price === 120)
      assert(item.remains === 2)
    })
  })

  describe('getById', () => {
    it('returns Entity specified by id', () => {
      const item = Item.getById(0)
      assert(item.id === 0)
      assert(item.drink.name === 'coffee')
      assert(item.price === 120)
      assert(item.remains === 10)
    })
    it('asserts with non-exist id', () => {
      assert.throws(() => {
        const item = Item.getById(3942)
      })
    })
  })

  describe('getAll', () => {
    it('returns all entities', () => {
      const items = Item.getAll()
      assert(Object.keys(items).length === 4)
      const item = items[0]
      assert(item.id === 0)
      assert(item.drink.name === 'coffee')
      assert(item.price === 120)
      assert(item.remains === 10)
    })
  })
})

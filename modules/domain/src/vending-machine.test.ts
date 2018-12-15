import * as assert from 'assert'

import * as VendingMachine from './vending-machine'

const inventory = [
  {
    drinkId: 0,
    price: 120,
    remains: 1,
  },
  {
    drinkId: 1,
    price: 100,
    remains: 0,
  },
]

describe('VendingMachine', () => {
  describe('factory', () => {
    it('returns VendingMachine', () => {
      const vendingMachine = VendingMachine.factory(inventory)
      assert(vendingMachine != null)
      assert(vendingMachine.inventory != null)
      assert(vendingMachine.inventory[0].drink.name === 'coffee')
      assert(vendingMachine.inventory[0].price === 120)
      assert(vendingMachine.inventory[0].remains === 1)
    })
    it('asserts with non-exist drink id', () => {
      assert.throws(() => {
        const vendingMachine = VendingMachine.factory(
          inventory.concat({
            drinkId: 2938,
            price: 120,
            remains: 10,
          }),
        )
      })
    })
  })

  describe('charge', () => {
    it('charges money to vending machine', () => {
      const initialState = VendingMachine.factory(inventory)
      const newState = VendingMachine.charge(initialState, 100)
      assert(newState.chargedMoney === 100)
    })
  })

  describe('buy', () => {
    it('process buying transactions', () => {
      const initialState = VendingMachine.factory(inventory)
      const chargedState = VendingMachine.charge(initialState, 500)
      const newState = VendingMachine.buy(chargedState, 0)
      assert(newState.chargedMoney === 380)
      assert(newState.inventory[0].id != null)
      assert(newState.inventory[0].drink.name === 'coffee')
      assert(newState.inventory[0].price === 120)
      assert(newState.inventory[0].remains === 0)
    })

    it('throws error when charged money is less than item price', () => {
      const initialState = VendingMachine.factory(inventory)
      const chargedState = VendingMachine.charge(initialState, 100)
      assert.throws(() => {
        VendingMachine.buy(chargedState, 0)
      })
    })

    it('throws error when selected item is sold out', () => {
      const initialState = VendingMachine.factory(inventory)
      const chargedState = VendingMachine.charge(initialState, 500)
      assert.throws(() => {
        VendingMachine.buy(chargedState, 1)
      })
    })
  })
})

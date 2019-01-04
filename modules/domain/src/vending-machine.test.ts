import * as assert from 'assert'

import * as VendingMachine from './vending-machine'

describe('VendingMachine', () => {
  describe('factory', () => {
    it('returns VendingMachine', () => {
      const vendingMachine = VendingMachine.factory()
      assert(vendingMachine != null)
      assert(vendingMachine.inventory != null)
      assert(vendingMachine.inventory[0].drink.name === 'coffee')
      assert(vendingMachine.inventory[0].price === 120)
      assert(vendingMachine.inventory[0].remains === 10)
    })

    it('returns VendingMachine with inventory seeds', () => {
      const vendingMachine = VendingMachine.factory([0])
      assert(vendingMachine != null)
      assert(vendingMachine.inventory != null)
      assert(vendingMachine.inventory[0].drink.name === 'coffee')
      assert(vendingMachine.inventory[0].price === 120)
      assert(vendingMachine.inventory[0].remains === 10)
    })
  })

  describe('charge', () => {
    it('charges money to vending machine', () => {
      const initialState = VendingMachine.factory()
      const newState = VendingMachine.charge(initialState, 100)
      assert(newState.chargedMoney === 100)
    })
  })

  describe('buy', () => {
    it('process buying transactions', () => {
      const initialState = VendingMachine.factory([0])
      const chargedState = VendingMachine.charge(initialState, 500)
      const newState = VendingMachine.buy(chargedState, 0)
      assert(newState.chargedMoney === 380)
      assert(newState.inventory[0].id != null)
      assert(newState.inventory[0].drink.name === 'coffee')
      assert(newState.inventory[0].price === 120)
      assert(newState.inventory[0].remains === 9)
    })

    it('throws error when charged money is less than item price', () => {
      const initialState = VendingMachine.factory()
      const chargedState = VendingMachine.charge(initialState, 100)
      assert.throws(() => {
        VendingMachine.buy(chargedState, 0)
      })
    })

    it('throws error when selected item is sold out', () => {
      const initialState = VendingMachine.factory([3])
      const chargedState = VendingMachine.charge(initialState, 500)
      assert.throws(() => {
        VendingMachine.buy(chargedState, 0)
      })
    })
  })
})

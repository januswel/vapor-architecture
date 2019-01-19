import { CHARGE, SELL, charge, sell } from './vending-machine'

describe('vending-machine', () => {
  describe('charge', () => {
    it('returns Action to tell "charge money"', () => {
      const action = charge(100)
      expect(action).toEqual({
        type: CHARGE,
        payload: {
          chargedMoney: 100,
        },
      })
    })

    it('returns Action to tell "sell an item"', () => {
      const action = sell(0)
      expect(action).toEqual({
        type: SELL,
        payload: {
          itemId: 0,
        },
      })
    })
  })
})

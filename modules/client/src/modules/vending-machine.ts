import { Coin, VendingMachine } from '@januswel/domain'

const CHARGE = 'vending-machine/charge'
const SELL = 'vending-machine/sell'

const initialState = VendingMachine.factory()

type Action =
  | {
      type: 'vending-machine/charge'
      payload: {
        chargedMoney: Coin.Entity
      }
    }
  | {
      type: 'vending-machine/sell'
      payload: {
        itemId: number
      }
    }

export default (state: VendingMachine.Entity = initialState, action: Action) => {
  switch (action.type) {
    case CHARGE:
      return VendingMachine.charge(state, action.payload.chargedMoney)
    case SELL:
      return VendingMachine.sell(state, action.payload.itemId)
    default:
      return state
  }
}

export const charge = (chargedMoney: Coin.Entity) => ({
  type: CHARGE,
  payload: {
    chargedMoney,
  },
})

export const sell = (itemId: number) => ({
  type: SELL,
  payload: {
    itemId,
  },
})

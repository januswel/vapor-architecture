import { Coin, VendingMachine } from '@januswel/domain'

import { DefineAction, DefineState } from './util'

const CHARGE = 'vending-machine/charge'
const SELL = 'vending-machine/sell'

export type Action =
  | DefineAction<typeof CHARGE, { chargedMoney: Coin.Entity }>
  | DefineAction<typeof SELL, { itemId: number }>

const initialState = VendingMachine.factory()

export type State = DefineState<typeof initialState>

export default (state: State = initialState, action: Action) => {
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

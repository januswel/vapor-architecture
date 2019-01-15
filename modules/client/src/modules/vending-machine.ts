import { Coin, VendingMachine } from '@januswel/domain'

import { createReducer } from './util'

const CHARGE = 'vending-machine/charge'
const SELL = 'vending-machine/sell'

type Types = typeof CHARGE | typeof SELL

const initialState = VendingMachine.factory()

export type State = typeof initialState

export const charge = (chargedMoney: Coin.Entity) => ({
  type: CHARGE as typeof CHARGE,
  payload: {
    chargedMoney,
  },
})

export const sell = (itemId: number) => ({
  type: SELL as typeof SELL,
  payload: {
    itemId,
  },
})

type ChargeAction = ReturnType<typeof charge>
type SellAction = ReturnType<typeof sell>
export type Action = ChargeAction | SellAction

export default createReducer<State, Types, Action>(initialState, {
  [CHARGE]: (state, action: ChargeAction) => VendingMachine.charge(state, action.payload.chargedMoney),
  [SELL]: (state, action: SellAction) => VendingMachine.sell(state, action.payload.itemId),
})

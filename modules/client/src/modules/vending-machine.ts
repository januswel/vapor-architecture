import { Coin, VendingMachine } from '@januswel/domain'

import createReducer from './create-reducer'

const CHARGE = 'vending-machine/charge'
const SELL = 'vending-machine/sell'

type Types = typeof CHARGE | typeof SELL

export const createInitialState = () => VendingMachine.factory()
export type State = ReturnType<typeof createInitialState>

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

export default createReducer<State, Types, Action>(createInitialState(), {
  [CHARGE]: (state, action: ChargeAction) => VendingMachine.charge(state, action.payload.chargedMoney),
  [SELL]: (state, action: SellAction) => VendingMachine.sell(state, action.payload.itemId),
})

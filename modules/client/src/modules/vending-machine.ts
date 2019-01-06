import { VendingMachine } from '@januswel/domain'

const CHARGE = 'vending-machine/charge'
const SELL = 'vending-machine/sell'

const initialState = VendingMachine.factory()

export default (state: VendingMachine.Subject = initialState, action) => {
  switch (action.type) {
    case CHARGE:
      return VendingMachine.charge(state, action.payload.chargedMoney)
    case SELL:
      return VendingMachine.sell(state, action.payload.itemId)
    default:
      return state
  }
}

export const charge = chargedMoney => ({
  type: CHARGE,
  payload: {
    chargedMoney,
  },
})

export const sell = itemId => ({
  type: SELL,
  payload: {
    itemId,
  },
})

import { VendingMachine } from 'vapor-domain'

const CHARGE = 'vending-machine/charge'
const BUY = 'vending-machine/buy'

const initialState = VendingMachine.factory()

export default (state: VendingMachine.Subject = initialState, action) => {
  switch (action.type) {
    case CHARGE:
      return VendingMachine.charge(state, action.payload.chargedMoney)
    case BUY:
      return VendingMachine.buy(state, action.payload.itemId)
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

export const buy = itemId => ({
  type: BUY,
  payload: {
    itemId,
  },
})

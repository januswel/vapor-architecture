import VendingMachine from 'vapor-domain'

const CHARGE = 'vending-machine/charge'
const BUY = 'vending-machine/buy'

const inventory = [
  {
    drinkId: 0,
    remains: 10,
  },
  {
    drinkId: 1,
    remains: 10,
  },
  {
    drinkId: 2,
    remains: 10,
  },
]
const initialState = VendingMachine.factory(inventory)

export default (state: VendingMachine.Subject = initialState, action) => {
  switch (action.type) {
    case CHARGE:
      return VendingMachine.charge(state, action.payload.chargedMoney)
    case BUY:
      return VendingMachine.buy(state, action.payload.selectedIndex)
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

export const buy = selectedIndex => ({
  type: BUY,
  payload: {
    selectedIndex,
  },
})

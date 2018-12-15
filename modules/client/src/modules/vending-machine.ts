import VendingMachine from 'vapor-domain'

const CHARGE = 'vending-machine/charge'
const BUY = 'vending-machine/buy'

const inventory = [
  {
    drinkId: 0,
    price: 120,
    remains: 10,
  },
  {
    drinkId: 0,
    price: 130,
    remains: 10,
  },
  {
    drinkId: 1,
    price: 100,
    remains: 10,
  },
  {
    drinkId: 2,
    price: 120,
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

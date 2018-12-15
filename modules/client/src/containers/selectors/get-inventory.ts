import { createSelector } from 'reselect'

const isTooFewChargedMoney = (chargedMoney, item) => chargedMoney < item.price
const isSoldOut = item => item.remains === 0
const getInventory = state =>
  state.inventory.map(item => ({
    id: item.id,
    name: item.drink.name,
    price: item.price,
    isTooFewChargedMoney: isTooFewChargedMoney(state.chargedMoney, item),
    isSoldOut: isSoldOut(item),
  }))

export default createSelector(
  [getInventory],
  inventory => inventory,
)

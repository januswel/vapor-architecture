import { createSelector } from 'reselect'

const isTooFewChargedMoney = (chargedMoney, item) => chargedMoney < item.price
const isSoldOut = item => item.remains === 0
const getInventory = state =>
  Object.keys(state.inventory).map(id => {
    const item = state.inventory[id]
    return {
      ...item,
      isTooFewChargedMoney: isTooFewChargedMoney(state.chargedMoney, item),
      isSoldOut: isSoldOut(item),
    }
  })

export default createSelector(
  [getInventory],
  inventory => inventory,
)

import { createSelector } from 'reselect'
import { Item } from '@januswel/domain'

import { AppState } from '../modules'

const getInventory = (state: AppState) => state.vendingMachine.inventory
const getChargedMoney = (state: AppState) => state.vendingMachine.chargedMoney

const isTooFewChargedMoney = (chargedMoney: number, item: Item.Entity) => chargedMoney < item.price
const isSoldOut = (item: Item.Entity) => item.remains === 0

export default createSelector(
  [getInventory, getChargedMoney],
  (inventory, chargedMoney) =>
    Object.keys(inventory).map(id => {
      const item = inventory[id]
      return {
        id: item.id,
        price: item.price,
        imageUrl: item.drink.imageUrl,
        isTooFewChargedMoney: isTooFewChargedMoney(chargedMoney, item),
        isSoldOut: isSoldOut(item),
      }
    }),
)

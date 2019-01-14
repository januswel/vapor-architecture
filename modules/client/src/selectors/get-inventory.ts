import { createSelector } from 'reselect'
import { Item, Inventory } from '@januswel/domain'

import { AppState } from '../store'

const getInventory = (state: AppState) => state.vendingMachine.inventory
const getChargedMoney = (state: AppState) => state.vendingMachine.chargedMoney

const isTooFewChargedMoney = (chargedMoney: number, item: Item.Entity) => chargedMoney < item.price
const isSoldOut = (item: Item.Entity) => item.remains === 0

export default createSelector(
  [getInventory, getChargedMoney],
  (inventory: Inventory.Entity, chargedMoney: number) =>
    Object.keys(inventory).map(id => {
      const item = inventory[id]
      return {
        ...item,
        isTooFewChargedMoney: isTooFewChargedMoney(chargedMoney, item),
        isSoldOut: isSoldOut(item),
      }
    }),
)

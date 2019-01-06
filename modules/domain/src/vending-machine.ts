import * as assert from 'assert'

import * as Drink from './drink'
import * as Item from './item'
import * as Inventory from './inventory'
import { Coin } from './coin'

export interface Entity {
  readonly inventory: Inventory.Entity
  readonly chargedMoney: number
}

// Factory
export const factory = (inventorySeeds?: Inventory.Seeds): Entity => ({
  inventory: inventorySeeds != null ? Inventory.factory(inventorySeeds) : Item.getAll(),
  chargedMoney: 0,
})

// Behaviors
export const charge = (vendingMachine: Entity, coin: Coin): Entity => ({
  ...vendingMachine,
  chargedMoney: vendingMachine.chargedMoney + coin,
})

export const sell = (vendingMachine: Entity, itemId: Item.Id): Entity => {
  assert(itemId in vendingMachine.inventory)

  const selectedItem = vendingMachine.inventory[itemId]
  if (vendingMachine.chargedMoney < selectedItem.price) {
    throw new Error(`too few charged money for selected item: ${vendingMachine.chargedMoney} < ${selectedItem.price}`)
  }
  if (selectedItem.remains <= 0) {
    throw new Error(`selected item is sold out: ${selectedItem.drink.name}`)
  }

  const newInventory = {
    ...vendingMachine.inventory,
    [itemId]: {
      ...selectedItem,
      remains: selectedItem.remains - 1,
    },
  }
  return {
    ...vendingMachine,
    inventory: newInventory,
    chargedMoney: vendingMachine.chargedMoney - selectedItem.price,
  }
}

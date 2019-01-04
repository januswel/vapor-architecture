import * as assert from 'assert'

import * as Drink from './drink'
import * as Item from './item'
import { Coin } from './coin'

interface Inventory {
  (id: string): Item.Entity;
}
export interface Entity {
  inventory: Array<Item.Entity>;
  chargedMoney: number;
}

export type InventorySeeds = Array<{
  id: Item.Id,
  drinkId: Drink.Id,
  price: number,
  remains: number,
}>

const factoryFromSeeds = (inventorySeeds: InventorySeeds) =>
  inventorySeeds.reduce((inventory, { id, drinkId, price, remains }) => {
    inventory[id] = Item.factory(id, drinkId, price, remains)
    return inventory
  }, {})

// initial state
export const factory = (inventorySeeds?: InventorySeeds): Entity => ({
  inventory: inventorySeeds != null ? factoryFromSeeds(inventorySeeds) : Item.repository.getAll(),
  chargedMoney: 0,
})

// update functions
export const charge = (vendingMachine: Entity, coin: Coin): Entity => ({
  ...vendingMachine,
  chargedMoney: vendingMachine.chargedMoney + coin,
})

export const buy = (vendingMachine: Entity, itemId: Item.Id): Entity => {
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

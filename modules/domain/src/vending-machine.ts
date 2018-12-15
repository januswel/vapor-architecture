import * as assert from 'assert'

import * as Drink from './drink'
import * as Item from './item'
import { Coin } from './coin'

export interface Entity {
  inventory: Array<Item.Entity>;
  chargedMoney: number;
}

export type InventorySeeds = Array<{
  drinkId: Drink.Id,
  price: number,
  remains: number,
}>

// initial state
export const factory = (inventorySeeds: InventorySeeds): Entity => {
  const vendingMachine = {
    inventory: inventorySeeds.map(item => Item.factory(item.drinkId, item.price, item.remains)),
    chargedMoney: 0,
  }
  return vendingMachine
}

// utility functions
export const selectableMaxIndex = (vendingMachine: Entity) => vendingMachine.inventory.length - 1

// update functions
export const charge = (vendingMachine: Entity, coin: Coin): Entity => {
  return {
    ...vendingMachine,
    chargedMoney: vendingMachine.chargedMoney + coin,
  }
}

export const buy = (vendingMachine: Entity, selectedIndex: number): Entity => {
  assert(selectedIndex <= selectableMaxIndex(vendingMachine))

  const selectedItem = vendingMachine.inventory[selectedIndex]
  if (vendingMachine.chargedMoney < selectedItem.price) {
    throw new Error(`too few charged money for selected item: ${vendingMachine.chargedMoney} < ${selectedItem.price}`)
  }
  if (selectedItem.remains <= 0) {
    throw new Error(`selected item is sold out: ${selectedItem.drink.name}`)
  }

  return {
    ...vendingMachine,
    inventory: vendingMachine.inventory.map((item, index) => {
      return index === selectedIndex
        ? {
            id: item.id,
            drink: item.drink,
            price: item.price,
            remains: item.remains - 1,
          }
        : item
    }),
    chargedMoney: vendingMachine.chargedMoney - selectedItem.price,
  }
}

import * as assert from 'assert'

import * as Drink from './drink'
import { Coin } from './coin'

export interface VendingMachine {
  inventory: Array<{
    drink: Drink.Subject,
    remains: number,
  }>;
  chargedMoney: number;
}

interface Item {
  drinkId: Drink.Id;
  remains: number;
}
type Inventory = Array<Item>

// initial state
export const factory = (inventory: Inventory): VendingMachine => {
  const vendingMachine = {
    inventory: inventory.map(item => ({
      drink: Drink.factory(item.drinkId),
      remains: item.remains,
    })),
    chargedMoney: 0,
  }
  return vendingMachine
}

// utility functions
export const selectableMaxIndex = (vendingMachine: VendingMachine) => vendingMachine.inventory.length - 1

// update functions
export const charge = (vendingMachine: VendingMachine, coin: Coin): VendingMachine => {
  return {
    ...vendingMachine,
    chargedMoney: vendingMachine.chargedMoney + coin,
  }
}

export const buy = (vendingMachine: VendingMachine, selectedIndex: number) => {
  assert(selectedIndex <= selectableMaxIndex(vendingMachine))

  const selectedItem = vendingMachine.inventory[selectedIndex]
  if (vendingMachine.chargedMoney < selectedItem.drink.price) {
    throw new Error(
      `too few charged money for selected item: ${vendingMachine.chargedMoney} < ${selectedItem.drink.price}`,
    )
  }
  if (selectedItem.remains <= 0) {
    throw new Error(`selected item is sold out: ${selectedItem.drink.name}`)
  }

  return {
    ...vendingMachine,
    inventory: vendingMachine.inventory.map((item, index) => {
      return index === selectedIndex
        ? {
            drink: item.drink,
            remains: item.remains - 1,
          }
        : item
    }),
    chargedMoney: vendingMachine.chargedMoney - selectedItem.drink.price,
  }
}

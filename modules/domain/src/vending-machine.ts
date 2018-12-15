import * as assert from 'assert'

import * as Drink from './drink'
import { Coin } from './coin'

export interface VendingMachine {
  inventory: Array<{
    drink: Drink.Subject,
    price: number,
    remains: number,
  }>;
  chargedMoney: number;
}

interface Item {
  drinkId: Drink.Id;
  price: number;
  remains: number;
}
export type Seed = Array<Item>

// initial state
export const factory = (inventory: Seed): VendingMachine => {
  const vendingMachine = {
    inventory: inventory.map(item => ({
      drink: Drink.factory(item.drinkId),
      price: item.price,
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
            drink: item.drink,
            price: item.price,
            remains: item.remains - 1,
          }
        : item
    }),
    chargedMoney: vendingMachine.chargedMoney - selectedItem.price,
  }
}

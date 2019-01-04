import * as Drink from './drink'
import * as Item from './item'

export interface Entity {
  [id: string]: Item.Entity;
}

export type Seeds = Array<Item.Id>

// Factory
export const factory = (seeds: Seeds) =>
  seeds.reduce((inventory, itemId) => {
    inventory[itemId] = Item.getById(itemId)
    return inventory
  }, {})

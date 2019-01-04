import * as Drink from './drink'
import * as Item from './item'

export interface Entity {
  [id: string]: Item.Entity;
}

export type Seeds = Array<{
  id: Item.Id,
  drinkId: Drink.Id,
  price: number,
  remains: number,
}>

// Factory
export const factory = (seeds: Seeds) =>
  seeds.reduce((inventory, { id, drinkId, price, remains }) => {
    inventory[id] = Item.factory(id, drinkId, price, remains)
    return inventory
  }, {})

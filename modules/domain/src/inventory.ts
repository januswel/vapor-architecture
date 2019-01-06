import * as Drink from './drink'
import * as Item from './item'

interface MutableEntity {
  [id: string]: Item.Entity
}
export interface Entity {
  readonly [id: string]: Item.Entity
}

export type Seeds = Array<Item.Id>

// Factory
export const factory = (seeds: Seeds): Entity =>
  seeds.reduce((inventory: MutableEntity, itemId) => {
    inventory[itemId] = Item.getById(itemId)
    return inventory
  }, {})

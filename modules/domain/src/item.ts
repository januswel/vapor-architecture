import * as assert from 'assert'

import deepFreeze from './util/deep-freeze'
import * as Drink from './drink'
import ITEMS_MASTER from './items-master'

export type Id = number
type Price = number
type Remains = number

export interface Entity {
  readonly id: Id
  readonly drink: Drink.Entity
  readonly price: Price
  readonly remains: Remains
}

type List = { readonly [id: string]: Entity }

// Factory
export const factory = (id: Id, drinkId: Drink.Id, price: Price, remains: Remains) => ({
  id,
  drinkId,
  drink: Drink.getById(drinkId),
  price,
  remains,
})

// Repository
const entities: List = deepFreeze(
  Object.keys(ITEMS_MASTER).reduce((entities, id) => {
    const item = ITEMS_MASTER[id]
    entities[id] = {
      ...item,
      drink: Drink.getById(item.drinkId),
    }
    return entities
  }, {}),
)

export const getAll = () => entities

export const getById = (id: Id) => {
  assert(id in entities, `id ${id} is not exists`)
  return entities[id]
}

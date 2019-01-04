import * as assert from 'assert'

import * as Drink from './drink'
import deepCopy from './util/deep-copy'
import ITEMS_MASTER from './items-master'

export type Id = number
type Price = number
type Remains = number

export interface Entity {
  id: Id;
  drink: Drink.Entity;
  price: Price;
  remains: Remains;
}

type List = { [id: string]: Entity }

// Factory
export const factory = (id: Id, drinkId: Drink.Id, price: Price, remains: Remains) => ({
  id,
  drinkId,
  drink: Drink.getById(drinkId),
  price,
  remains,
})

// Repository
const cache: List = Object.keys(ITEMS_MASTER).reduce((cache, id) => {
  const item = ITEMS_MASTER[id]
  cache[id] = {
    ...item,
    drink: Drink.getById(item.drinkId),
  }
  return cache
}, {})

export const getAll = () => deepCopy(cache)

export const getById = (id: Id) => {
  assert(id in cache, `id ${id} is not exists`)
  return deepCopy(cache[id])
}

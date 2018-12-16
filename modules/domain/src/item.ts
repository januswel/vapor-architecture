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

export const factory = (id: Id, drinkId: Drink.Id, price: Price, remains: Remains) => ({
  id,
  drinkId,
  drink: Drink.repository.getById(drinkId),
  price,
  remains,
})

const cache = {}
Object.keys(ITEMS_MASTER).map(id => {
  const item = ITEMS_MASTER[id]
  cache[id] = {
    ...item,
    drink: Drink.repository.getById(item.drinkId),
  }
})

export const repository = {
  getAll() {
    return deepCopy(cache)
  },
  getById(id: Id) {
    assert(id in cache, `id ${id} is not exists`)
    return deepCopy(cache[id])
  },
}

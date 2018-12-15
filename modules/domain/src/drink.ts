import * as assert from 'assert'

import DRINKS_MASTER from './drinks-master'

export type Id = number

export interface Subject {
  id: Id;
  name: string;
  price: number;
}

export const factory = (id: Id): Subject => {
  assert(id in Object.keys(DRINKS_MASTER), `id ${id} is not exists`)

  const ITEM_MASTER = DRINKS_MASTER[id]
  return {
    id,
    name: ITEM_MASTER.name,
    price: ITEM_MASTER.price,
  }
}

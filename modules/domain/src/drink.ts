import * as assert from 'assert'

import DRINKS_MASTER from './drinks-master'

export type Id = number

export interface Entity {
  id: Id;
  name: string;
}

export const factory = (id: Id): Entity => {
  assert(id in Object.keys(DRINKS_MASTER), `id ${id} is not exists`)

  const ITEM_MASTER = DRINKS_MASTER[id]
  return {
    id,
    name: ITEM_MASTER.name,
  }
}

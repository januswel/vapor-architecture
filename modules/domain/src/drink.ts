import * as assert from 'assert'

import deepCopy from './util/deep-copy'
import DRINKS_MASTER from './drinks-master'

export type Id = number

export interface Entity {
  id: Id;
  name: string;
}

export const factory = (id: Id): Entity => {
  assert(id in Object.keys(DRINKS_MASTER), `id ${id} is not exists`)
  return DRINKS_MASTER[id]
}

export const repository = {
  getAll() {
    return deepCopy(DRINKS_MASTER)
  },
  getById(id: Id) {
    return deepCopy(DRINKS_MASTER[id])
  },
}

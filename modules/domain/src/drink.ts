import * as assert from 'assert'

import deepCopy from './util/deep-copy'
import DRINKS_MASTER from './drinks-master'

export type Id = number

export interface Entity {
  id: Id;
  name: string;
  imageUrl: string;
}

// Repository
export const getAll = () => deepCopy(DRINKS_MASTER)

export const getById = (id: Id) => {
  assert(id in DRINKS_MASTER, `id ${id} is not exists`)
  return deepCopy(DRINKS_MASTER[id])
}

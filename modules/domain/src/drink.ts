import * as assert from 'assert'

import DRINKS_MASTER from './drinks-master'

export type Id = number

export interface Entity {
  readonly id: Id
  readonly name: string
  readonly imageUrl: string
}

// Repository
export const getAll = () => DRINKS_MASTER

export const getById = (id: Id) => {
  assert(id in DRINKS_MASTER, `id ${id} is not exists`)
  return DRINKS_MASTER[id]
}

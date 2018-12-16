import deepFreeze from './util/deep-freeze'

const DRINKS_MASTER = {
  0: {
    id: 0,
    name: 'coffee',
  },
  1: {
    id: 1,
    name: 'water',
  },
  2: {
    id: 2,
    name: 'guarana',
  },
}

deepFreeze(DRINKS_MASTER)

export default DRINKS_MASTER

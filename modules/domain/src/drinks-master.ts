import deepFreeze from './util/deep-freeze'

const DRINKS_MASTER = {
  0: {
    name: 'coffee',
    price: 120,
  },
  1: {
    name: 'water',
    price: 100,
  },
  2: {
    name: 'guarana',
    price: 120,
  },
}

deepFreeze(DRINKS_MASTER)

export default DRINKS_MASTER

import deepFreeze from './util/deep-freeze'

const DRINKS_MASTER = {
  0: {
    name: 'coffee',
  },
  1: {
    name: 'water',
  },
  2: {
    name: 'guarana',
  },
}

deepFreeze(DRINKS_MASTER)

export default DRINKS_MASTER

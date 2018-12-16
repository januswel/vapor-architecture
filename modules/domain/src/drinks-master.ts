import deepFreeze from './util/deep-freeze'

const DRINKS_MASTER = {
  0: {
    id: 0,
    name: 'coffee',
    imageUrl: 'http://localhost:3000/images/coffee.png',
  },
  1: {
    id: 1,
    name: 'water',
    imageUrl: 'http://localhost:3000/images/water.png',
  },
  2: {
    id: 2,
    name: 'soda',
    imageUrl: 'http://localhost:3000/images/soda.png',
  },
}

deepFreeze(DRINKS_MASTER)

export default DRINKS_MASTER

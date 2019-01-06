interface ItemsMaster {
  readonly [id: string]: {
    readonly id: number
    readonly drinkId: number
    readonly price: number
    readonly remains: number
  }
}

const ITEMS_MASTER: ItemsMaster = {
  0: {
    id: 0,
    drinkId: 0,
    price: 120,
    remains: 10,
  },
  1: {
    id: 1,
    drinkId: 1,
    price: 100,
    remains: 10,
  },
  2: {
    id: 2,
    drinkId: 2,
    price: 120,
    remains: 1,
  },
  3: {
    id: 3,
    drinkId: 0,
    price: 120,
    remains: 0,
  },
}

export default ITEMS_MASTER

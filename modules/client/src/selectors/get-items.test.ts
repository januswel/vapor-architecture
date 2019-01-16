import getItems from './get-items'
import { VendingMachine } from '@januswel/domain'
import { AppState, createInitialState } from '../modules'

const initialState: AppState = createInitialState()

describe('getItems', () => {
  it('returns data to display', () => {
    const chargedState = {
      ...initialState,
      vendingMachine: VendingMachine.charge(VendingMachine.charge(initialState.vendingMachine, 100), 10),
    }
    expect(getItems(chargedState)).toEqual([
      {
        id: 0,
        imageUrl: 'http://localhost:3000/images/coffee.png',
        isSoldOut: false,
        isTooFewChargedMoney: true,
        price: 120,
      },
      {
        id: 1,
        imageUrl: 'http://localhost:3000/images/water.png',
        isSoldOut: false,
        isTooFewChargedMoney: false,
        price: 100,
      },
      {
        id: 2,
        imageUrl: 'http://localhost:3000/images/soda.png',
        isSoldOut: false,
        isTooFewChargedMoney: true,
        price: 120,
      },
      {
        id: 3,
        imageUrl: 'http://localhost:3000/images/coffee.png',
        isSoldOut: true,
        isTooFewChargedMoney: true,
        price: 120,
      },
    ])
  })
})

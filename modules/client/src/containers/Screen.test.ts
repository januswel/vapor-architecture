import store from '../store'
import { mapStateToProps, mapDispatchToProps } from './Screen'

describe('mapStateToProps', () => {
  it('maps props for Screen from Redux store', () => {
    const props = mapStateToProps(store.getState())
    expect(props).toEqual({
      error: null,
      chargedMoney: 0,
      isCommunicating: false,
      items: [
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
          isTooFewChargedMoney: true,
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
      ],
    })
  })
})

describe('mapDispatchToProps', () => {
  it('maps props for Screen from Redux store', () => {
    const props = mapDispatchToProps(store.dispatch)
    expect(props.actions).toBeDefined()
    expect(props.actions.clearError).toBeDefined()
    expect(props.actions.charge).toBeDefined()
    expect(props.actions.sellAndCount).toBeDefined()
  })
})

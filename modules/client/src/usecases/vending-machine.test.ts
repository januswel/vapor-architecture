import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as fetchMock from 'fetch-mock'

import { createInitialState } from '../modules'
import { sellAndCount } from './vending-machine'
import { SEND_REQUEST, RECEIVE_RESPONSE } from '../modules/network'
import { SELL } from '../modules/vending-machine'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('sellAndCount', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('dispatches expected actions', () => {
    fetchMock.postOnce('http://localhost:3000/items', { status: 200 })

    const store = mockStore(createInitialState())

    return store.dispatch(sellAndCount(0) as any).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: SEND_REQUEST,
        },
        {
          type: SELL,
          payload: {
            itemId: 0,
          },
        },
        {
          type: RECEIVE_RESPONSE,
        },
      ])
    })
  })
})
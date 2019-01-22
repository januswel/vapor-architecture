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

  it('dispatches expected actions when network communication is failed caused by server error', () => {
    const ERROR_MESSAGE = 'Service Unavailable'
    fetchMock.postOnce('http://localhost:3000/items', { status: 503, body: ERROR_MESSAGE })

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
          error: true,
          payload: {
            error: new Error(ERROR_MESSAGE),
          },
          type: 'error/set',
        },
        {
          type: RECEIVE_RESPONSE,
        },
      ])
    })
  })

  it('dispatches expected actions when network communication is failed', () => {
    const ERROR_MESSAGE = 'Network request failed'
    fetchMock.postOnce('http://localhost:3000/items', { status: 503, throws: new Error(ERROR_MESSAGE) })

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
          error: true,
          payload: {
            error: new Error(ERROR_MESSAGE),
          },
          type: 'error/set',
        },
        {
          type: RECEIVE_RESPONSE,
        },
      ])
    })
  })
})

import isWaiting from './is-waiting'
import store from '../store'
import { sendRequest } from '../modules/network'

describe('isWaiting', () => {
  it('returns a flag indicates if the device is waiting or not', () => {
    expect(isWaiting(store.getState())).toBe(false)
    store.dispatch(sendRequest())
    expect(isWaiting(store.getState())).toBe(true)
  })
})

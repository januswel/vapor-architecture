import isWaiting from './is-waiting'
import { createInitialState } from '../modules'

const initialState = createInitialState()

describe('isWaiting', () => {
  it('returns a flag indicates if the device is waiting or not', () => {
    expect(isWaiting(initialState)).toBe(false)
    expect(
      isWaiting({
        ...initialState,
        network: {
          numofWaitings: 3,
        },
      }),
    ).toBe(true)
  })
})

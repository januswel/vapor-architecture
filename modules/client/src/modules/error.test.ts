import reducer, { SET_ERROR, CLEAR_ERROR, setError, clearError, createInitialState } from './error'

describe('error', () => {
  describe('setError', () => {
    it('returns Action to tell "set error"', () => {
      const error = new Error('test')
      expect(setError(error)).toEqual({
        type: SET_ERROR,
        error: true,
        payload: {
          error,
        },
      })
    })
  })

  describe('clearError', () => {
    it('returns Action to tell "clear error"', () => {
      expect(clearError()).toEqual({
        type: CLEAR_ERROR,
      })
    })
  })

  describe('reducer', () => {
    it('reduces actions to set error', () => {
      const state = createInitialState()
      const error = new Error('test')
      expect(reducer(state, setError(error))).toEqual({
        error: error,
      })
    })

    it('reduces actions to set error', () => {
      const state = createInitialState()
      const error = new Error('test')
      const errorState = reducer(state, setError(error))
      expect(reducer(errorState, clearError())).toEqual({
        error: null,
      })
    })
  })
})

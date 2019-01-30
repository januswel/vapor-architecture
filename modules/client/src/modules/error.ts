import createReducer from './create-reducer'

export const SET_ERROR = 'error/set'
export const CLEAR_ERROR = 'clear/error'

type Types = typeof SET_ERROR | typeof CLEAR_ERROR

export type State = { readonly error: Error | null }
export const createInitialState = (): State => ({
  error: null,
})

export const setError = (error: Error) => ({
  type: SET_ERROR as typeof SET_ERROR,
  error: true,
  payload: {
    error,
  },
})
export const clearError = () => ({
  type: CLEAR_ERROR as typeof CLEAR_ERROR,
})

type SetErrorAction = ReturnType<typeof setError>
export type Action = SetErrorAction | ReturnType<typeof clearError>

export default createReducer<State, Types, Action>(createInitialState(), {
  [SET_ERROR]: (state, action: SetErrorAction) => ({
    ...state,
    error: action.payload.error,
  }),
  [CLEAR_ERROR]: state => ({
    ...state,
    error: null,
  }),
})

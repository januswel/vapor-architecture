import createReducer from './create-reducer'

export const SEND_REQUEST = 'network/send-request'
export const RECEIVE_RESPONSE = 'network/receive-request'

type Types = typeof SEND_REQUEST | typeof RECEIVE_RESPONSE

export type State = { readonly numofWaitings: number }
export const createInitialState = (): State => ({
  numofWaitings: 0,
})

export const sendRequest = () => ({
  type: SEND_REQUEST as typeof SEND_REQUEST,
})
export const receiveResponse = () => ({
  type: RECEIVE_RESPONSE as typeof RECEIVE_RESPONSE,
})

export type Action = ReturnType<typeof sendRequest> | ReturnType<typeof receiveResponse>

export default createReducer<State, Types, Action>(createInitialState(), {
  [SEND_REQUEST]: state => ({
    numofWaitings: state.numofWaitings + 1,
  }),
  [RECEIVE_RESPONSE]: state => ({
    numofWaitings: state.numofWaitings - 1,
  }),
})

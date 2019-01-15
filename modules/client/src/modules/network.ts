import { createReducer } from './util'

export const SEND_REQUEST = 'network/send-request'
export const RECEIVE_RESPONSE = 'network/receive-request'

type Types = typeof SEND_REQUEST | typeof RECEIVE_RESPONSE

const initialState = {
  numofWaitings: 0,
}

export type State = typeof initialState

export const sendRequest = () => ({
  type: SEND_REQUEST as typeof SEND_REQUEST,
})
export const receiveResponse = () => ({
  type: RECEIVE_RESPONSE as typeof RECEIVE_RESPONSE,
})

export type Action = ReturnType<typeof sendRequest> | ReturnType<typeof receiveResponse>

export default createReducer<State, Types, Action>(initialState, {
  [SEND_REQUEST]: state => ({
    numofWaitings: state.numofWaitings + 1,
  }),
  [RECEIVE_RESPONSE]: state => ({
    numofWaitings: state.numofWaitings - 1,
  }),
})

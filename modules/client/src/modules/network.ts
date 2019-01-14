import { DefineAction, DefineState } from './util'

const SEND_REQUEST = 'network/send-request'
const RECEIVE_RESPONSE = 'network/receive-request'

export type Action = DefineAction<typeof SEND_REQUEST> | DefineAction<typeof RECEIVE_RESPONSE>

const initialState = {
  numofWaitings: 0,
}

export type State = DefineState<typeof initialState>

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        numofWaitings: state.numofWaitings + 1,
      }
    case RECEIVE_RESPONSE:
      return {
        numofWaitings: state.numofWaitings - 1,
      }
    default:
      return state
  }
}

export const sendRequest = () => ({
  type: SEND_REQUEST,
})
export const receiveResponse = () => ({
  type: RECEIVE_RESPONSE,
})

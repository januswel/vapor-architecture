const SEND_REQUEST = 'network/send-request'
const RECEIVE_RESPONSE = 'network/receive-request'

type State = number
type Action = {
  type: string,
}
const initialState = 0

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return state + 1
    case RECEIVE_RESPONSE:
      return state - 1
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

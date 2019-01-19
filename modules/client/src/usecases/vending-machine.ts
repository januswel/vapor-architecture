import { Dispatch } from 'redux'

import { sell } from '../modules/vending-machine'
import { sendRequest, receiveResponse } from '../modules/network'

export const sellAndCount = (itemId: number) => (dispatch: Dispatch) => {
  dispatch(sendRequest())
  const sellAction = sell(itemId)
  dispatch(sellAction)

  return fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(sellAction),
  })
    .then(response => {
      console.log(response)
      dispatch(receiveResponse())
    })
    .catch(e => {
      console.log(e)
      dispatch(receiveResponse())
    })
}

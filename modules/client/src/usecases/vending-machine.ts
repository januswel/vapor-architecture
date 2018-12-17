import { buy } from '../modules/vending-machine'
import { sendRequest, receiveResponse } from '../modules/network'

export const buyAndCount = itemId => dispatch => {
  dispatch(sendRequest())
  const buyAction = buy(itemId)
  dispatch(buyAction)

  fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(buyAction),
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

import { combineReducers } from 'redux'
import vendingMachineReducer from './vending-machine'
import networkReducer from './network'

export default combineReducers({
  vendingMachine: vendingMachineReducer,
  network: networkReducer,
})

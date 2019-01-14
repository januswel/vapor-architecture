import { combineReducers } from 'redux'
import vendingMachineReducer, { State as VendingMachineState } from './vending-machine'
import networkReducer, { State as NetworkState } from './network'

export interface AppState {
  vendingMachine: VendingMachineState
  network: NetworkState
}

export default combineReducers<AppState>({
  vendingMachine: vendingMachineReducer,
  network: networkReducer,
})

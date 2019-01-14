import { combineReducers } from 'redux'
import vendingMachineReducer, { State as VendingMachineState } from './vending-machine'
import networkReducer, { State as NetworkState } from './network'

export interface AppState {
  readonly vendingMachine: VendingMachineState
  readonly network: NetworkState
}

export default combineReducers<AppState>({
  vendingMachine: vendingMachineReducer,
  network: networkReducer,
})

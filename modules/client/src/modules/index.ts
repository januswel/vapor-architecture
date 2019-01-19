import { combineReducers } from 'redux'

import vendingMachineReducer, { createInitialState as createVendingMachineInitialState } from './vending-machine'
import networkReducer, { createInitialState as createNetworkInitialState } from './network'

export type AppState = {
  readonly vendingMachine: ReturnType<typeof createVendingMachineInitialState>
  readonly network: ReturnType<typeof createNetworkInitialState>
}
export const createInitialState = (): AppState => ({
  vendingMachine: createVendingMachineInitialState(),
  network: createNetworkInitialState(),
})

export default combineReducers<AppState>({
  vendingMachine: vendingMachineReducer,
  network: networkReducer,
})

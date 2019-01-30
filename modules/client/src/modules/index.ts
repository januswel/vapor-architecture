import { combineReducers } from 'redux'

import vendingMachineReducer, { createInitialState as createVendingMachineInitialState } from './vending-machine'
import networkReducer, { createInitialState as createNetworkInitialState } from './network'
import errorReducer, { createInitialState as createErrorInitialState } from './error'

export type AppState = {
  readonly error: ReturnType<typeof createErrorInitialState>
  readonly vendingMachine: ReturnType<typeof createVendingMachineInitialState>
  readonly network: ReturnType<typeof createNetworkInitialState>
}
export const createInitialState = (): AppState => ({
  error: createErrorInitialState(),
  vendingMachine: createVendingMachineInitialState(),
  network: createNetworkInitialState(),
})

export default combineReducers<AppState>({
  error: errorReducer,
  vendingMachine: vendingMachineReducer,
  network: networkReducer,
})

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import appReducer, { AppState } from './modules'
export { AppState }

export default createStore(appReducer, applyMiddleware(thunk))

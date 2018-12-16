import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './modules/vending-machine'

export default createStore(reducer, applyMiddleware(thunk))

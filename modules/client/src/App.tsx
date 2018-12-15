import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'
import Screen from './containers/Screen'

export default () => (
  <Provider store={store}>
    <Screen />
  </Provider>
)

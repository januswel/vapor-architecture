import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import NetworkIndicator from './NetworkIndicator'

import Charger from './Charger'
import Inventory from './Inventory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
})

export default props => (
  <SafeAreaView style={styles.container}>
    <Charger {...props} />
    <Inventory {...props} />
    {props.isCommunicating ? <NetworkIndicator style={styles.indicator} /> : null}
  </SafeAreaView>
)

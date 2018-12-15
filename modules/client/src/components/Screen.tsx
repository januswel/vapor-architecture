import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import Charger from './Charger'
import Inventory from './Inventory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default props => (
  <SafeAreaView style={styles.container}>
    <Charger {...props} />
    <Inventory {...props} />
  </SafeAreaView>
)

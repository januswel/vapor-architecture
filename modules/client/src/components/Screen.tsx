import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Charger from './Charger'
//import Inventory from './Inventory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default props => (
  <View style={styles.container}>
    <Charger {...props} chargedMoney={props.vendingMachine.chargedMoney} />
    {/*<Inventory inventory={props.vendingMachine.inventory} />*/}
  </View>
)

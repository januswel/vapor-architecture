import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VendingMachineModel from 'vapor-domain'

import VendingMachine from './components/VendingMachine'

const inventory = [
  {
    drinkId: 0,
    remains: 10,
  },
  {
    drinkId: 1,
    remains: 10,
  },
  {
    drinkId: 2,
    remains: 10,
  },
]
const vendingMachine = VendingMachineModel.factory(inventory)

export default () => (
  <View style={styles.container}>
    <VendingMachine vendingMachine={vendingMachine} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 32,
  },
})

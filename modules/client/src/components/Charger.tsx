import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Coin from './Coin'

const styles = StyleSheet.create({
  cointainer: {},
  label: {
    fontSize: 32,
    backgroundColor: 'black',
    color: 'orange',
    textAlign: 'right',
    margin: 8,
    padding: 16,
  },
  coins: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default props => (
  <View style={styles.container}>
    <View style={styles.chargedMoney}>
      <Text style={styles.label}>¥ {props.vendingMachine.chargedMoney}</Text>
    </View>
    <View style={styles.coins}>
      <Coin {...props} price={10} />
      <Coin {...props} price={50} />
      <Coin {...props} price={100} />
      <Coin {...props} price={500} />
    </View>
  </View>
)

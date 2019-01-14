import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Coin, { Actions as CoinActions } from './Coin'

const styles = StyleSheet.create({
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

export type ChargedMoney = number
export type Actions = CoinActions
export interface Props {
  chargedMoney: ChargedMoney
  actions: Actions
}

export default (props: Props) => (
  <>
    <Text style={styles.label}>¥ {props.chargedMoney}</Text>
    <View style={styles.coins}>
      <Coin {...props} price={10} />
      <Coin {...props} price={50} />
      <Coin {...props} price={100} />
      <Coin {...props} price={500} />
    </View>
  </>
)

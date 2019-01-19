import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import NetworkIndicator from './NetworkIndicator'

import Charger, { ChargedMoney, Actions as ChargerActions } from './Charger'
import Display, { Items, Actions as InventoryActions } from './Display'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export type Actions = ChargerActions & InventoryActions
export interface Props {
  items: Items
  chargedMoney: ChargedMoney
  isCommunicating: boolean
  actions: Actions
}
export default (props: Props) => (
  <SafeAreaView style={styles.container}>
    <Charger {...props} />
    <Display {...props} />
    {props.isCommunicating ? <NetworkIndicator /> : null}
  </SafeAreaView>
)

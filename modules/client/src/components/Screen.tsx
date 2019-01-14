import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import NetworkIndicator from './NetworkIndicator'

import Charger, { ChargedMoney, Actions as ChargerActions } from './Charger'
import Inventory, { Inventory as InventoryType, Actions as InventoryActions } from './Inventory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export type Actions = ChargerActions & InventoryActions
export interface Props {
  inventory: InventoryType
  chargedMoney: ChargedMoney
  isCommunicating: boolean
  actions: Actions
}
export default (props: Props) => (
  <SafeAreaView style={styles.container}>
    <Charger {...props} />
    <Inventory {...props} />
    {props.isCommunicating ? <NetworkIndicator /> : null}
  </SafeAreaView>
)

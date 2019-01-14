import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import NetworkIndicator from './NetworkIndicator'

import Charger, { Props as ChargerProps } from './Charger'
import Inventory, { Props as InventoryProps } from './Inventory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

interface Props extends ChargerProps, InventoryProps {
  isCommunicating: boolean
  actions: {
    sellAndCount: (index: number) => void
    charge: (price: number) => void
  }
}
export default (props: Props) => (
  <SafeAreaView style={styles.container}>
    <Charger {...props} />
    <Inventory {...props} />
    {props.isCommunicating ? <NetworkIndicator /> : null}
  </SafeAreaView>
)

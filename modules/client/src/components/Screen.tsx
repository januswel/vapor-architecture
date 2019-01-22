import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
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

type ScreenActions = {
  clearError: () => void
}
export type Actions = ChargerActions & InventoryActions & ScreenActions
export interface Props {
  error: Error | null
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
    {props.error != null && (
      <Text
        onPress={() => {
          props.actions.clearError()
        }}
      >
        {props.error.message}
      </Text>
    )}
  </SafeAreaView>
)

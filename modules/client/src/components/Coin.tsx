import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    height: 96,
    backgroundColor: 'silver',
    borderRadius: 48,
  },
  label: {
    fontSize: 32,
  },
})

export interface Actions {
  charge: (price: number) => void
}
export interface Props {
  price: number
  actions: Actions
}
export default (props: Props) => (
  <TouchableOpacity
    onPress={() => {
      props.actions.charge(props.price)
    }}
  >
    <View style={styles.container}>
      <Text style={styles.label}>{props.price}</Text>
    </View>
  </TouchableOpacity>
)

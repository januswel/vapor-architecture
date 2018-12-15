import React from 'react'
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

export default props => (
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

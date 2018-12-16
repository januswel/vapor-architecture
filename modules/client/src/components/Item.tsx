import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 168,
    margin: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  price: {
    fontSize: 16,
  },
})

const soldOutStyle = {
  backgroundColor: 'red',
}
const tooFewChargedMoneyStyle = {
  backgroundColor: 'gray',
}

const ButtonLabel = props => {
  const backgroundStyle = props.isSoldOut ? soldOutStyle : props.isTooFewChargedMoney ? tooFewChargedMoneyStyle : {}

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text style={styles.name}>{props.drink.name}</Text>
      <Text style={styles.price}>¥{props.price}</Text>
    </View>
  )
}

export default props => {
  return props.isSoldOut || props.isTooFewChargedMoney ? (
    <ButtonLabel {...props} />
  ) : (
    <TouchableOpacity
      onPress={() => {
        props.actions.buy(props.index)
      }}
    >
      <ButtonLabel {...props} />
    </TouchableOpacity>
  )
}

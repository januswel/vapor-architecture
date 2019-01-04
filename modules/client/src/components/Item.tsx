import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 168,
    margin: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumbnail: {
    width: 96,
    height: 96,
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
      <Image style={styles.thumbnail} source={{ uri: props.drink.imageUrl }} resizeMode="contain" />
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
        props.actions.sellAndCount(props.index)
      }}
    >
      <ButtonLabel {...props} />
    </TouchableOpacity>
  )
}

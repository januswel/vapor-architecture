import * as React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

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

export interface Props {
  price: number
  imageUrl: string
  isSoldOut: boolean
  isTooFewChargedMoney: boolean
}

export default (props: Props) => {
  const backgroundStyle = props.isSoldOut ? soldOutStyle : props.isTooFewChargedMoney ? tooFewChargedMoneyStyle : {}

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Image style={styles.thumbnail} source={{ uri: props.imageUrl }} resizeMode="contain" />
      <Text style={styles.price}>¥{props.price}</Text>
    </View>
  )
}

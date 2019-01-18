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

const BACKGROUND_COLORS = {
  SOLD_OUT: {
    backgroundColor: 'red',
  },
  TOO_FEW_CHARGED_MONEY: {
    backgroundColor: 'gray',
  },
  AVAILABLE: {},
}

export interface Props {
  price: number
  imageUrl: string
  isSoldOut: boolean
  isTooFewChargedMoney: boolean
}

const computeBackgroundColor = (props: Props) => {
  if (props.isSoldOut) {
    return BACKGROUND_COLORS.SOLD_OUT
  }
  if (props.isTooFewChargedMoney) {
    return BACKGROUND_COLORS.TOO_FEW_CHARGED_MONEY
  }
  return BACKGROUND_COLORS.AVAILABLE
}

export default (props: Props) => {
  return (
    <View style={[styles.container, computeBackgroundColor(props)]}>
      <Image style={styles.thumbnail} source={{ uri: props.imageUrl }} resizeMode="contain" />
      <Text style={styles.price}>¥{props.price}</Text>
    </View>
  )
}

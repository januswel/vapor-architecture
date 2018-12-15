import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default props => (
  <View>
    <Text>{props.item.drink.name}</Text>
    <Text>{props.item.drink.price}</Text>
    <Text>{props.item.remains}</Text>
    <TouchableOpacity>
      <Text>buy</Text>
    </TouchableOpacity>
  </View>
)

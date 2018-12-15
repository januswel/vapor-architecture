import React from 'react'
import { View } from 'react-native'

import Item from './Item'

export default props => (
  <View>
    {props.inventory.map(item => (
      <Item item={item} />
    ))}
  </View>
)

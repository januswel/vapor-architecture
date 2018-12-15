import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item from './Item'

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
})

export default props => (
  <FlatList
    style={styles.container}
    data={props.vendingMachine.inventory}
    extraDate={props.vendingMachine.chargedMoney}
    numColumns={2}
    renderItem={({ item, index }) => <Item {...props} item={item} index={index} />}
    keyExtractor={item => item.drink.id.toString()}
  />
)

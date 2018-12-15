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
    data={props.inventory}
    extraDate={props.chargedMoney}
    numColumns={2}
    renderItem={({ item, index }) => <Item {...item} actions={props.actions} index={index} />}
    keyExtractor={item => item.id}
  />
)

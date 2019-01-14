import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item, { Props as ItemProps, Actions as ItemActions } from './Item'

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
})

export type Inventory = Array<ItemProps>
export type Actions = ItemActions
export interface Props {
  inventory: Inventory
  chargedMoney: number
  actions: Actions
}
export default (props: Props) => (
  <FlatList
    style={styles.container}
    data={props.inventory}
    extraData={props.chargedMoney}
    numColumns={2}
    renderItem={({ item, index }) => <Item {...item} actions={props.actions} index={index} />}
    keyExtractor={item => item.id.toString(10)}
  />
)

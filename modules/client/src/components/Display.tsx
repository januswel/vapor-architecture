import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item, { Props as ItemProps, Actions as ItemActions } from './Item'

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
})

export type Items = Array<ItemProps>
export type Actions = ItemActions
export interface Props {
  items: Items
  chargedMoney: number
  actions: Actions
}
export default (props: Props) => (
  <FlatList
    style={styles.container}
    data={props.items}
    extraData={props.chargedMoney}
    numColumns={2}
    renderItem={({ item }) => <Item {...item} actions={props.actions} />}
    keyExtractor={item => item.id.toString(10)}
  />
)

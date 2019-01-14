import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item, { Props as ItemProps } from './Item'

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
})

export interface Props extends ItemProps {
  inventory: Array<ItemProps>
  chargedMoney: number
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

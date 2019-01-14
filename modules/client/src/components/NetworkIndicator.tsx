import * as React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
})

export default () => <ActivityIndicator style={styles.container} size="large" />

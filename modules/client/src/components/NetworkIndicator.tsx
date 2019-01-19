import * as React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
})

export default () => <ActivityIndicator style={styles.container} size="large" />

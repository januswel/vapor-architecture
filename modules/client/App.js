import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import sum from 'vapor-domain'

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>{sum(1, 3)}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 32,
  },
})

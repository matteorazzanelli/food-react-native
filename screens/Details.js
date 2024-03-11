import { View, Text } from 'react-native'
import React from 'react'

export default function Details({ route, navigation }) {
  const {itemId, sectionId} = route.params;
  return (
    <View>
      <Text>Details</Text>
      <Text>{itemId}</Text>
      <Text>{sectionId}</Text>
    </View>
  )
}
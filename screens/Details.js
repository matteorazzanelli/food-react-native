import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import foodItems from '../data/food';

export default function Details({ route, navigation }) {
  const {itemId, sectionId} = route.params;
  const product = foodItems[sectionId].data[itemId]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{product.title}</Text>
      <Image
          source={{uri: product.uri}}
          style={styles.itemPhoto}
        />
      <Text>Description: {product.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 32
  },
  itemPhoto: {
    width: 400,
    height: 400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})
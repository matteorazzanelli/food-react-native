import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ListItem({navigation, item, section}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={()=>
      navigation.navigate('Details', 
      {itemId: item.id, sectionId: section.id})
    }>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
      />
      <Text style={styles.small}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  small: {
    width: 200,
    height: 100,
    marginBottom: 10,
    marginRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'skyblue',
  },
  itemPhoto: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})
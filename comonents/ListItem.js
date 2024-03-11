import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default function ListItem({navigation, item, section}) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      onPress={()=>navigation.navigate('Details', {itemId: item.id, sectionId: section.id})
    }>
      <View>
      <Text style={styles.itemRemaining}>{item.remaining} rimanenti</Text>
        <Image
          source={{uri: item.uri}}
          style={styles.itemPhoto}
        />
      </View>
      <View style={[styles.itemText, styles.itemGlobal]}>
        <Text style={{fontSize: 20}}>{item.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name='clock' size={20} color="#FFF" />
          <Text>{item.pickup}</Text>
        </View>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemGlobal: {
    elevation: 5
  },
  itemText: {
    width: 220,
    height: 100,
    marginBottom: 10,
    marginRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  itemPhoto: {
    width: 220,
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemRemaining: {
    top: 25,
    zIndex: 1,
    left: 10,
    backgroundColor: 'darkorange',
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  itemPrice: {
    color: 'green',
    fontSize: 20,
    alignSelf: 'flex-end',
    paddingRight: 20
  }
})
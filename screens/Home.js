import { SectionList, StyleSheet,  Text, FlatList, View } from 'react-native'
import React from 'react'

import foodItems from '../data/food';
import ListItem from '../comonents/ListItem';

import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Home({ navigation }) {
  return (
    <SectionList
      style={styles.container}
      sections={foodItems}
      renderSectionHeader={({ section }) =>
        <>
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
            <Icon name='star' size={20} color='#FFF'/>
            <Text style={styles.headerText}>{section.rating}</Text>
            <Icon name='walking' size={20} color='#FFF'/>
            <Text style={styles.headerText}>{section.distance}</Text>
          </View>
          
          <FlatList horizontal
            data={section.data}
            renderItem={
              ({item})=><ListItem item={item} section={section} navigation={navigation}/>
            }
            showsHorizontalScrollIndicator={false}
          />
        </>
      }
      renderItem={() => null}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    width: 200,
    height: 30,
    marginBottom: 10,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white'
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
})
import { SectionList, StyleSheet,  Text, FlatList } from 'react-native'
import React from 'react'

import foodItems from '../data/food';
import ListItem from '../comonents/ListItem';

export default function Home({ navigation }) {
  return (
    <SectionList
      style={styles.container}
      sections={foodItems}
      renderSectionHeader={({ section }) =>
        <>
          <Text style={styles.header}>{section.title}</Text>
          <FlatList horizontal
            data={section.data}
            renderItem={({item})=><ListItem item={item} section={section} navigation={navigation}/>}
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
    flex: 1,
  },
  header: {
    width: 200,
    height: 30,
    marginBottom: 10,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
})
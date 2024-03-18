import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import foodItems from '../data/food';

import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios'

export default function Details({ route, navigation }) {

  const {itemId, sectionId} = route.params;
  const product = foodItems[sectionId].data[itemId]

  const { isPending, error, data, isSuccess } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => {
      const comment = sectionId*itemId+1; // FIXME: is only a sample
      return axios.get(
      `https://jsonplaceholder.typicode.com/comments/${comment}`
      ).then((res) => res.data)
    }
  })

  if (isPending) return <View><Text>'Loading...'</Text></View>

  if (error) return <View><Text>'An error has occurred: ' + error.message</Text></View>

  if(isSuccess)
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.header}>{product.title}</Text>
          <Image
              source={{uri: product.uri}}
              style={styles.itemPhoto}
            />
          {/* <Text>Description: {product.description}</Text> */}
          <Text>👀 Description: {data.body}</Text>
        </View>
      </>
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
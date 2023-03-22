import { View, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';

export default function ProductScreen({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable 
          style={styles.itemConatiner} 
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
            }}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%', aspectRatio: 1
  },
  itemConatiner: {
    width: '50%',
    padding: 1
  }
});
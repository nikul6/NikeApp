import { View, Text, Image, StyleSheet, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../store/cartSlice';

export default function ProductDeatilsScreen() {

    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const addTocart = () => {
        dispatch(cartSlice.actions.addCartItem({ product }))
    }

    return (
        <View>
            <ScrollView>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={addTocart}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#000',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16
    }
});
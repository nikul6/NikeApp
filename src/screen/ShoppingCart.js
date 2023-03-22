import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
// import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../store/cartSlice';

const ShoppingCartTools = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal)
  return (
    <View style={styles.totalConatiner}>
      <View style={styles.row}>
        <Text style={styles.text}>Sub Total</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
}

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTools}
      />
      <Pressable style={styles.button}
      // onPress={addTocart}
      >
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  totalConatiner: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
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

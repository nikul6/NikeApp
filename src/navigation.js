// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../src/screen/ProductScreen';
import ProductDetailsScreen from '../src/screen/ProductDeatilsScreen';
import ShoppingCart from '../src/screen/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

function Navigation() {
    const numberOfitems = useSelector(selectNumberOfItems)
    console.log("numberOfitems ---> ", numberOfitems)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {backgroundColor:'#fff'}}}>
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={({ navigation }) => ({
                        headerRight: () => <Pressable style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Cart')}>
                            <FontAwesome5 name='shopping-cart' size={18} color='gray' />
                            <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfitems}</Text>
                        </Pressable>
                    })} />
                <Stack.Screen
                    name="Product Details"
                    component={ProductDetailsScreen}
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
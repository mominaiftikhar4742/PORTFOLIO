import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const PRODUCTS = [
  { id: "1", name: "Smartphone", price: 699, image: "https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg "},
  { id: "2", name: "Laptop", price: 1299, image: "https://tse2.mm.bing.net/th?id=OIP.Ir29KH8ifMH_oEOBLg6uYwHaHa&w=474&h=474&c=7" },
  { id: "3", name: "Headphones", price: 199, image: "https://tse2.mm.bing.net/th?id=OIP.9w2omoM5ZGy1yt4V5kjrewHaHa&w=474&h=474&c=7" },
  { id: "4", name: "Smartwatch", price: 249, image: "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&w=474&h=474&c=7" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("ProductDetails", { product: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: product.image }} style={styles.detailsImage} />
      <Text style={styles.detailsName}>{product.name}</Text>
      <Text style={styles.detailsPrice}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate("Cart", { product })} />
    </View>
  );
};

const CartScreen = ({ route }) => {
  const product = route.params?.product;
  return (
    <View style={styles.cartContainer}>
      {product ? (
        <>
          <Text style={styles.cartTitle}>Cart Items</Text>
          <Text style={styles.cartItem}>{product.name} - ${product.price}</Text>
          <Button title="Checkout" onPress={() => alert("Order Placed!")} />
        </>
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f8f8" },
  product: { flex: 1, margin: 10, backgroundColor: "#fff", padding: 10, borderRadius: 10, alignItems: "center" },
  image: { width: 100, height: 100, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "green" },
  detailsContainer: { flex: 1, alignItems: "center", padding: 20 },
  detailsImage: { width: 200, height: 200, marginBottom: 20 },
  detailsName: { fontSize: 22, fontWeight: "bold" },
  detailsPrice: { fontSize: 18, color: "green", marginBottom: 20 },
  cartContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  cartTitle: { fontSize: 20, fontWeight: "bold" },
  cartItem: { fontSize: 18, marginVertical: 10 },
  emptyCart: { fontSize: 18, fontStyle: "italic" },
});
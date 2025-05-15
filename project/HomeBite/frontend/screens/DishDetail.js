import React from "react";
import { View, Text, Button } from "react-native";

export default function DishDetails({ route, navigation }) {
  const { dish } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {dish.name}</Text>
      <Text>Description: {dish.description}</Text>
      <Text>Price: {dish.price}</Text>
      <Text>Delivery Fee: {dish.deliveryFee}</Text>
      <Button title="Place Order" onPress={() => navigation.navigate("Order", { dish })} />
    </View>
  );
}

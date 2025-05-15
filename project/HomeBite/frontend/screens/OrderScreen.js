import React from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";

export default function OrderScreen({ route }) {
  const { dish } = route.params;

  const placeOrder = async () => {
    const orderData = {
      userId: "demo-user", // replace with actual logged-in user
      dishId: dish._id,
      quantity: 1,
      totalAmount: dish.price + dish.deliveryFee,
      deliveryTime: "45 minutes",
    };
    await axios.post("http://<your-server-ip>:5000/api/orders", orderData);
    alert("Order Placed!");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Total: {dish.price + dish.deliveryFee} PKR</Text>
      <Text>Delivery Time: 45 minutes</Text>
      <Button title="Confirm Order" onPress={placeOrder} />
    </View>
  );
}

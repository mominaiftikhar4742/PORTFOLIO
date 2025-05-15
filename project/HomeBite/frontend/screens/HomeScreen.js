import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get("http://<your-server-ip>:5000/api/dishes")
      .then(res => setDishes(res.data))
      .catch(console.error);
  }, []);

  return (
    <FlatList
      data={dishes}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("DishDetails", { dish: item })}>
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Image source={{ uri: item.image }} style={{ height: 100, width: 100 }} />
            <Text>{item.name}</Text>
            <Text>{item.price} PKR</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

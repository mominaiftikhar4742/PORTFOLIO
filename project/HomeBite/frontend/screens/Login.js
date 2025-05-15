import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://<your-server-ip>:5000/api/auth/login", {
        username,
        password,
      });
      Alert.alert("Success", "Login Successful");
      // Optionally store user info with AsyncStorage
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 10 }} onPress={() => navigation.navigate("Register")}>
        Don't have an account? Register
      </Text>
    </View>
  );
}

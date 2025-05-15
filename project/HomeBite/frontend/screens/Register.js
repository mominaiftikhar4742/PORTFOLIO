import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://<your-server-ip>:5000/api/auth/register", {
        username,
        password,
      });
      Alert.alert("Success", "Registration Successful");
      navigation.navigate("Login");
    } catch (err) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Text style={{ marginTop: 10 }} onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
      </Text>
    </View>
  );
}

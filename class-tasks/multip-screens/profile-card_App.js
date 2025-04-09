import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert("Error", "Please fill out all fields!");
      return;
    }
    navigation.navigate("Educational Details");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const EducationalDetailsScreen = ({ navigation }) => {
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");

  const handleSubmit = () => {
    if (!degree || !school) {
      Alert.alert("Error", "Please fill out your educational details!");
      return;
    }
    navigation.navigate("Thank You");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Educational Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your degree"
        value={degree}
        onChangeText={setDegree}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your school"
        value={school}
        onChangeText={setSchool}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const ThankYouScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Registration");
  }, 2000); // Redirect to Registration screen after 2 seconds

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank You</Text>
      <Text style={styles.text}>Thank you for providing your details!</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS, // Custom transition animation for screen change
        }}
      >
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Educational Details" component={EducationalDetailsScreen} />
        <Stack.Screen name="Thank You" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#1DA1F2",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});

export default App;

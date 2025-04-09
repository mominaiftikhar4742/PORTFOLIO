import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // States for colors
  const [bgColor, setBgColor] = useState("#f5f5f5"); // Default light background
  const [textColor, setTextColor] = useState("#333"); // Default light text color
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill out all fields!");
      return;
    }
    Alert.alert("Success", `Welcome, ${name}!`);
  };

  // Switch between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setBgColor(isDarkMode ? "#f5f5f5" : "#333");
    setTextColor(isDarkMode ? "#333" : "#fff");
  };

  // Style adjustments based on background and text color
  const containerStyle = { backgroundColor: bgColor, flex: 1, justifyContent: "center", alignItems: "center", padding: 20 };
  const textStyle = { color: textColor };
  const inputStyle = {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: isDarkMode ? "#555" : "#ccc",
    backgroundColor: isDarkMode ? "#444" : "#fff",
    fontSize: 16,
    color: isDarkMode ? "#fff" : "#333",
  };
  const buttonStyle = {
    backgroundColor: isDarkMode ? "#444" : "#1DA1F2",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  };

  return (
    <View style={containerStyle}>
      {/* Registration Card */}
      <Text style={[styles.header, textStyle]}>Create an Account</Text>

      {/* Name Input */}
      <TextInput
        style={inputStyle}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={inputStyle}
        placeholder="Enter your password"
        placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Submit Button */}
      <TouchableOpacity style={buttonStyle} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Toggle Theme Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Text>
      </TouchableOpacity>

      {/* Change Background Color */}
      <Text style={[styles.text, textStyle]}>Select Background Color:</Text>
      <View style={styles.colorPickerContainer}>
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#f5f5f5" }]}
          onPress={() => setBgColor("#f5f5f5")}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#333" }]}
          onPress={() => setBgColor("#333")}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#1DA1F2" }]}
          onPress={() => setBgColor("#1DA1F2")}
        />
      </View>

      {/* Change Text Color */}
      <Text style={[styles.text, textStyle]}>Select Text Color:</Text>
      <View style={styles.colorPickerContainer}>
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#333" }]}
          onPress={() => setTextColor("#333")}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#fff" }]}
          onPress={() => setTextColor("#fff")}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#000" }]}
          onPress={() => setTextColor("#000")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container styles for light and dark mode
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Color Picker Styles
  colorPickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },

  // Toggle button style for theme switch
  toggleButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    backgroundColor: "#555",
    alignItems: "center",
  },
});

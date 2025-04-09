import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const [isPortrait, setIsPortrait] = useState(true);

  // Function to check screen orientation
  const checkOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setIsPortrait(height >= width);
  };

  // Listen for screen orientation changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', checkOrientation);
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, isPortrait ? styles.portrait : styles.landscape]}>
      <Text style={styles.text}>{isPortrait ? "Portrait Mode 📱" : "Landscape Mode 📟"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert("Rotate your device!")}>
        <Text style={styles.buttonText}>Switch to {isPortrait ? "Landscape" : "Portrait"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portrait: {
    backgroundColor: '#f5f5f5',
  },
  landscape: {
    backgroundColor: '#4285F4',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

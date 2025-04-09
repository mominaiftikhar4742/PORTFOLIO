import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const [isLocked, setIsLocked] = useState(false);
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
      <Text style={styles.text}>
        {isLocked ? "Orientation Locked 🔒" : "Orientation Unlocked 🔓"}
      </Text>
      
      {isLocked && !isPortrait && (
        <Text style={styles.warning}>⚠ Please keep your device in Portrait Mode!</Text>
      )}

      <TouchableOpacity 
        style={[styles.button, isLocked && styles.disabledButton]} 
        onPress={() => setIsLocked(true)}
        disabled={isLocked}
      >
        <Text style={styles.buttonText}>{isLocked ? "Locked" : "Lock Orientation"}</Text>
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
    backgroundColor: '#ffcccb',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  warning: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

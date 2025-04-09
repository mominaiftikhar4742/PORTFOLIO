import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello, i am momina!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'serif',
  },
  text2: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'blue',
    fontFamily: 'monospace',
  },
  text3: {
    fontSize: 24,
    textDecorationLine: 'underline',
    color: 'green',
    fontFamily: 'sans-serif',
  },
});

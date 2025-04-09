import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  // Get current date
  const currentDate = new Date();

  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    fontFamily: 'serif',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
  },
});

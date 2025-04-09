import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(String(eval(input))); // ✅ Use eval() for calculations
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else if (value === '√') {
      setInput(String(Math.sqrt(parseFloat(input))));
    } else if (value === '^') {
      setInput(input + '**'); // ✅ Convert "^" to "**"
    } else if (value === 'sin') {
      setInput(String(Math.sin(parseFloat(input) * (Math.PI / 180)))); // ✅ Convert degrees to radians
    } else if (value === 'cos') {
      setInput(String(Math.cos(parseFloat(input) * (Math.PI / 180))));
    } else if (value === 'tan') {
      setInput(String(Math.tan(parseFloat(input) * (Math.PI / 180))));
    } else if (value === 'log') {
      setInput(String(Math.log10(parseFloat(input))));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['C', '⌫', '√', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '^'],
    ['sin', 'cos', 'tan', 'log']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button) => (
            <TouchableOpacity 
              key={button} 
              style={styles.button} 
              onPress={() => handlePress(button)}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    fontSize: 32,
    padding: 10,
    width: '90%',
    textAlign: 'right',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 20,
    margin: 5,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

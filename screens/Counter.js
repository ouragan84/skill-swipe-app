import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {ENV_NAME} from '@env';

export default function Counter (props) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        style={[styles.button, styles.text]}
        title="Click me!"
      />
      <Text style={styles.monotext}>ENV Name: {ENV_NAME}</Text>
      <Text style={styles.text}>Platform: {Platform.OS}</Text>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color:'#a08020',
  },
  text: {
    fontFamily: 'open-sans'
  },
  monotext: {
    fontFamily: 'roboto-mono'
  },
});
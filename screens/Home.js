import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Logs"
        onPress={() => props.navigation.navigate('Logs')}
      />
      <Button
        title="Go to Counter"
        onPress={() => props.navigation.navigate('Counter')}
      />
    </View>
  );
}
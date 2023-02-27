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
      <Button
        title="Go to Onboarding"
        onPress={() => props.navigation.navigate('Onboard')}
      />
      <Button
        title="Go to Test Screen"
        onPress={() => props.navigation.navigate('TestScreen')}
      />
      <Button
      title="Go to Set Profile Details"
      onPress={() => props.navigation.navigate('SetProfileDetails')}
      />
      <Button
      title="Go to Experience Page"
      onPress={() => props.navigation.navigate('Experience')}
      />
    </View>
  );
}
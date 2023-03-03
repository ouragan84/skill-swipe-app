import React from 'react';
import { Button, View, Text } from 'react-native';
import * as auth from '../hooks/authentication';


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
        title="Reset Credentials"
        onPress={() => auth.deleteCredentials()}
      />
      <Button
        title="User SignUp (after email conf)"
        onPress={() => props.navigation.navigate('NameDOB')}
      />
      <Button
        title="Business SignUp (after email conf)"
        onPress={() => props.navigation.navigate('GetStarted')}
      />
    </View>
  );
}
import React from 'react';
import { Button, View, Text } from 'react-native';
import LocationComponent from '../components/Location';

import * as Location from 'expo-location';

import * as auth from '../hooks/authentication';


export default function Home(props) {

  const handleLocationAccess = (userData) => {
     console.log(`here's the data: `, userData)
  }



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
        title="See Open Roles"
        onPress={() => props.navigation.navigate('UserRecommendationsMain')}
      />
    
      <Button
        title="Get Location"
        onPress={() => props.navigation.navigate('Location')}

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
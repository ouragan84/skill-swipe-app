// App.js

import React from 'react';
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Logs from './screens/Logs';
import Counter from './screens/Counter';
import Onboard from './screens/consumer/Onboard';
import SignUp from './screens/consumer/register/SignUp';
import TestScreen from './screens/TestScreen';

import useCachedResources from './hooks/useCachedResources';
import ProfileDetails from './screens/consumer/register/ProfileDetails';
import Describe from './screens/Describe';
import EmailConfirmation from './screens/consumer/register/EmailConfirmation';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#eee',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >

      <Stack.Screen 
        name="Home" 
        component={ Home } 
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen 
        name="Logs" 
        component={ Logs }
        options={{ title: 'Logs App' }}
      />
      <Stack.Screen 
       name="Counter" 
       component={ Counter } 
       options={{ title: 'Cool Counter' }}
      />
      <Stack.Screen 
       name="Onboard" 
       
       component={ Onboard } 
       options={{ title: 'Onboard', headerShown: false }}
      />
      <Stack.Screen 
       name="ProfileDetails" 
       
       component={ ProfileDetails } 
       options={{ title: 'ProfileDetails', headerShown: false }}
      />
      <Stack.Screen 
       name="SignUp" 
       
       component={ SignUp } 
       options={{ title: 'SignUp', headerShown: false }}
      />
      <Stack.Screen 
       name="Describe" 
       
       component={ Describe } 
       options={{ title: 'Describe', headerShown: false }}
      />
      <Stack.Screen 
       name="EmailConfirmation" 
       
       component={ EmailConfirmation } 
       options={{ title: 'EmailConfirmation', headerShown: false, gestureEnabled:false }}
      />
      <Stack.Screen 
       name="TestScreen" 
       
       component={ TestScreen } 
       options={{ title: 'TestScreen', headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer theme={MyTheme} >
        <NavStack />
      </NavigationContainer>
    );
  }
}

console.disableYellowBox = true;
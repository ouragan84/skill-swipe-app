// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Logs from './screens/Logs';
import Counter from './screens/Counter';
import TestCS from './screens/TestCS';

import useCachedResources from './hooks/useCachedResources';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
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
        options={{ title: 'Home' }}
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
       name="TestCS" 
       component={ TestCS } 
       options={{ title: 'Test Screen' }}
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
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    );
  }
}

console.disableYellowBox = true;
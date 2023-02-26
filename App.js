// App.js

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Logs from './screens/Logs';
import Counter from './screens/Counter';
import Onboard from './screens/Onboard';
// TODO - CHANGE below later
import LocationComponent from './components/Location';
import SignUp from './screens/SignUp';
import TestScreen from './screens/TestScreen';
import BottomNavBar from './components/main/BottomNavBar';
import useCachedResources from './hooks/useCachedResources';
import ProfileDetails from './screens/ProfileDetails';
import Describe from './screens/Describe';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

function NavStack(props) {
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
        options={{ title: 'Home', headerShown: false}}
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
       name="Location" 
  
       component={ LocationComponent } 
       options={{ title: 'Location', headerShown: false }}
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
       name="TestScreen" 
       
       component={ TestScreen } 
       options={{ title: 'TestScreen', headerShown: true}}
      />
      <Stack.Screen 
       name="BottomNavBar" 
       
       component={ BottomNavBar }
       options={{ title: 'BottomNavBar', headerShown: true, navigation: props.navigation }}
      />
    </Stack.Navigator>
  );
}

export default function App() {

  const isLoadingComplete = useCachedResources();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer theme={MyTheme} >
        <NavStack/>
      </NavigationContainer>
    );
  }
}

console.disableYellowBox = true;
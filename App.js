// App.js

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Logs from './screens/Logs';
import Counter from './screens/Counter';
// TODO - CHANGE below later
import LocationComponent from './components/Location';
import Onboard from './screens/consumer/Onboard';
import SignUp from './screens/consumer/register/SignUp';
import SignIn from './screens/consumer/login/SignIn';
import CodeSent from './screens/consumer/login/CodeSent';
import ResetPassword from './screens/consumer/login/ResetPassword';
import ForgotPassword from './screens/consumer/login/ForgotPassword';
import TestScreen from './screens/TestScreen';
import BottomNavBar from './components/main/BottomNavBar';
import useCachedResources from './hooks/useCachedResources';
import ProfileDetails from './screens/consumer/register/ProfileDetails';
import Describe from './screens/Describe';
import EmailConfirmation from './screens/consumer/register/EmailConfirmation';
import NameDOB from './screens/consumer/register/user/NameDOB';
import Experience from './screens/consumer/register/user/Experience';
import Interests from './screens/consumer/register/user/Interests';
import Skills from './screens/consumer/register/user/Skills';
import Profile from './screens/Profile';

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
       name="EmailConfirmation" 
       
       component={ EmailConfirmation } 
       options={{ title: 'EmailConfirmation', headerShown: false, gestureEnabled:false }}
      />
      <Stack.Screen 
       name="SignIn" 
       
       component={ SignIn } 
       options={{ title: 'SignIn', headerShown: false }}
      />
      <Stack.Screen 
       name="ForgotPassword" 
       
       component={ ForgotPassword } 
       options={{ title: 'ForgotPassword', headerShown: false }}
      />
      <Stack.Screen 
       name="CodeSent" 
       
       component={ CodeSent } 
       options={{ title: 'CodeSent', headerShown: false }}
      />
      <Stack.Screen 
       name="ResetPassword" 
       
       component={ ResetPassword } 
       options={{ title: 'ResetPassword', headerShown: false }}
      />
      <Stack.Screen 
       name="NameDOB" 
       
       component={ NameDOB } 
       options={{ title: 'NameDOB', headerShown: false }}
      />
      <Stack.Screen 
       name="Experience" 
       
       component={ Experience } 
       options={{ title: 'Experience', headerShown: false }}
      />
      <Stack.Screen 
       name="Interests" 
       
       component={ Interests } 
       options={{ title: 'Experience', headerShown: false, gestureEnabled:false }}
      />
      <Stack.Screen 
       name="Skills" 
       
       component={ Skills } 
       options={{ title: 'Skills', headerShown: false, gestureEnabled:false }}
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'ForgotPassword', headerShown: false }}
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
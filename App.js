// App.js

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Logs from './screens/Logs';
import Counter from './screens/Counter';
import Onboard from './screens/Onboard';
import UserRecommendations from './screens/UserRecommendations';
import UserRecommendationsMain from './screens/UserRecommendationsMain';
// TODO - CHANGE below later
import LocationComponent from './components/Location';
import SignUp from './screens/SignUp';
import TestScreen from './screens/TestScreen';
import BottomNavBar2 from './components/main/BottomNavBar2';
import useCachedResources from './hooks/useCachedResources';
import ProfileDetails from './screens/ProfileDetails';
//import Profile from './screens/Profile';
import Likes from './screens/Likes';
import Messages from './screens/Messages';
import Describe from './screens/Describe';


// here Start
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

    {/* <Tab.Screen
        name="NavStack"
        component={NavStack}
        options={{
          tabBarLabel: 'NavStack',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}

    </Tab.Navigator>
  );
}


// here end

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
       name="UserRecommendationsMain" 
       
       component={ UserRecommendationsMain } 
       options={{ title: 'UserRecommendationsMain', headerShown: false }}
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
       name="MyTabs" 
       
       component={ MyTabs }
       options={{ title: 'MyTabs', headerShown: true, navigation: props.navigation }}
      />
      {/* <Stack.Screen 
       name="Profile" 
       
       component={ Profile } 
       options={{ title: 'Profile', headerShown: true }}
      />
      <Stack.Screen 
       name="Likes" 
       
       component={ Likes } 
       options={{ title: 'Likes', headerShown: true }}
      />
      <Stack.Screen 
       name="Messages" 
       
       component={ Messages } 
       options={{ title: 'Messages', headerShown: true }}
      /> */}
      {/* <Stack.Screen 
       name="BottomNavBar2" 
       
       component={ BottomNavBar2 } 
       options={{ title: 'BottomNavBar2', headerShown: true }}
      /> */}

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
        {/* {isLoggedIn? <MyTabs /> : <NavStack/>} */}
        <NavStack/>
      </NavigationContainer>
    );
  }
}

console.disableYellowBox = true;
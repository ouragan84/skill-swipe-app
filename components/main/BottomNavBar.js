import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Profile from '../../screens/Profile';
import Likes from '../../screens/Likes';
import Messages from '../../screens/Messages';
import UserRecommendations from '../../screens/UserRecommendations';
import Main from './Main';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="LOGO"
        component={Main}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarLabel: 'Likes',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="like1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavBar;
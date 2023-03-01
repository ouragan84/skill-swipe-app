import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MyProfile from '../../screens/MyProfile';
import Likes from '../../screens/Likes';
import Messages from '../../screens/Messages';
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
        name="Main"
        children={props => <Main {...props} />}
      />
      <Tab.Screen
        name="Likes"
        // component={Likes}
        children={props => <Likes navigation={props.navigation} />}
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
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'MyProfile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavBar;
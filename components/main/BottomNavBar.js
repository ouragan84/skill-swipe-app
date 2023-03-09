import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MyProfile from '../../screens/MyProfile';
import Dashboard from '../../screens/Dashboard';
import Likes from '../../screens/Likes';
import Messages from '../../screens/Messages';
import Explore from './Explore';
import Main from './Main';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function BottomNavBar({route}) {

  console.log('route isTypeUser: ', route.params.isTypeUser)
  //const isTypeUser = props.route.params.isTypeUser;
  const isTypeUser=route.params.isTypeUser

  const userNavBar = (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
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
        <Tab.Screen
          name="Main"
          //children={props => <Main {...props} />}
          component={Main}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: 'Matches',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={24} color="black" />
            ),
          }}
        />
        
        
      </Tab.Navigator>
  )
  
  const busNavBar = (
    <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >

        <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={24} color="black" />
                ),
              }}
            />

        <Tab.Screen
          name="Main"
          //children={props => <Main {...props} />}
          component={Main}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: 'Matches',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={24} color="black" />
            ),
          }}
        />
        
       
      </Tab.Navigator>
  )
  

  return (
    <>
        {isTypeUser ? userNavBar: busNavBar}
    </>
    
  );
}

export default BottomNavBar;
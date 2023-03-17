import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import MyProfile from '../../screens/MyProfile';
// import Dashboard from '../../screens/Dashboard';
import Likes from '../../screens/Likes';
import Messages from '../../screens/Messages';
import Explore from './Explore';
import Main from './Main';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import EditCurrentPosition from './EditCurrentPosition';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from '../helper/Metrics';

const Tab = createMaterialTopTabNavigator();

function TopNavBar({route}) {

  //console.log('route isTypeUser: ', route.params.isTypeUser)
  //const isTypeUser = props.route.params.isTypeUser;
  //const isTypeUser=route.params.isTypeUser
  
  const busNavBar = (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
        }}
        
      >
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
        <Tab.Screen
          name="Main"
          children={() => <Main data={route.params.data} isTypeUser={route.params.isTypeUser}/>}
        />
        <Tab.Screen
          name="EditCurrentPosition"
          component={EditCurrentPosition}
          options={{
            tabBarLabel: 'Edit Position',
            tabBarIcon: ({ color, size }) => (
              <Feather name="edit" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
  )
  

  return (
    <>
        {busNavBar}
    </>
    
  );
}

export default TopNavBar;
import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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



const Tab = createBottomTabNavigator();

function BottomNavBar({route}) {

  // console.log('route isTypeUser: ', route.params.isTypeUser)
  //const isTypeUser = props.route.params.isTypeUser;
  const isTypeUser=route.params.isTypeUser
  const profile=route.params.profile

  // console.log(profile);

  const userNavBar = (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerShown: false
        }}
      >
        <Tab.Screen
          name="MyProfile"
          // component={MyProfile}
          children={()=><MyProfile profile={profile}/>}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} color="black" />
            ),
          }}
          
        />
        <Tab.Screen
          name="Main"
          //children={props => <Main {...props} />}
          children={() => <Main isTypeUser={route.params.isTypeUser}/>}
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
        {userNavBar}
    </>
    
  );
}

export default BottomNavBar;
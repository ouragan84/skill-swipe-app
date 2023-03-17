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
import Entypo from 'react-native-vector-icons/Entypo';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

function TopNavBar(props) {

  //console.log('route isTypeUser: ', route.params.isTypeUser)
  // const isTypeUser = props.route.params.isTypeUser;
  const isTypeUser = false;
  const profile = props.route.params.profile;
  const position_index = props.route.params.position_index;
  const positionInfos = props.route.params.positionInfos;
  const [title, setTitle] = React.useState("poop")
  // console.log(profile)

  // const [indexP, setIndexP] = React.useState(position_index);


  // console.log("POstiogon ; ", positionInfos[position_index])
  // props

  // props.title = "poop"
  
  const busNavBar = (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63'
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
          children={() => <Main isTypeUser={isTypeUser} position_index={position_index} />}
        />
        <Tab.Screen
          name="EditCurrentPosition"
          children={() => <EditCurrentPosition position_index={position_index} position={positionInfos[position_index]} navigation={props.navigation}/>}
          // component={EditCurrentPosition}
          options={{
            tabBarLabel: 'Edit Position',
            tabBarIcon: ({ color, size }) => (
              <Feather name="edit" size={24} color="black" />
            ),
            animationEnabled: false,
          }}
        />
      </Tab.Navigator>
  )
  

  return (
    <>
        <View style={{backgroundColor:'#28A0BB', height:verticalScale(105), width:'100%'}} >
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Entypo style={{width:horizontalScale(100),fontSize:moderateScale(25), fontWeight:'bold', color:'white', textAlign:'left', alignItems:'center', top:verticalScale(55), paddingLeft:moderateScale(10)}} name="chevron-left" onPress={()=>{props.navigation.pop()}}/>
            <Text style={{width:horizontalScale(100),fontSize:moderateScale(20), fontWeight:'bold', color:'white', textAlign:'center', alignItems:'center', top:verticalScale(55)}}>{positionInfos[position_index].information.title}</Text>   
            <View style={{width:horizontalScale(100)}}/>
          </View>
        </View>
        {busNavBar}
    </>
    
  );
}

export default TopNavBar;
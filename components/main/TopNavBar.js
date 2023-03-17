import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const { width, height } = Dimensions.get('window');


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

  onst [navColorState, setNavColorState] = React.useState([false, false, false]);

  
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
          children={() => <Messages isTypeUser={isTypeUser} dashNav={props.navigation} pos_index={position_index}/>}
          listeners={{
            tabPress: e => {
              setNavColorState([true, false, false])
            }
          }}
          options={{
            tabBarLabel: 'Matches',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles"  size={moderateScale(30)} color={navColorState[0]? "#28A0BB": "black"} style={{marginBottom: moderateScale(-20)}}/>
            ),
          }}
        />
        <Tab.Screen
          name="Main"
          children={() => <Main isTypeUser={isTypeUser} position_index={position_index}  />}
          listeners={{
            tabPress: e => {
              setNavColorState([false, true, false])
            }
          }}
          options={{
            tabBarLabel: 'Main',
            tabBarIcon: ({ color, size }) => (
              <Image style={{height: verticalScale(40), width:horizontalScale(40), marginTop: moderateScale(20)}} source={require('../../assets/images/logo.png')}/>
            ),
          }}
        />
        <Tab.Screen
          name="EditCurrentPosition"
          children={() => <EditCurrentPosition position_index={position_index} position={positionInfos[position_index]} navigation={props.navigation}/>}
          // component={EditCurrentPosition}
          listeners={{
            tabPress: e => {
              setNavColorState([false, false, true])
            }
          }}
          options={{
            tabBarLabel: 'Edit Position',
            tabBarIcon: ({ color, size }) => (
              <Feather name="edit"   size={moderateScale(30)} color={navColorState[0]? "#28A0BB": "black"} style={{marginBottom: moderateScale(-20)}}/>
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
            <Entypo style={{width:horizontalScale(width/6),fontSize:moderateScale(25), fontWeight:'bold', color:'white', textAlign:'left', alignItems:'center', top:verticalScale(55), paddingLeft:moderateScale(15)}} name="chevron-left" onPress={()=>{props.navigation.pop()}}/>
            <Text style={{width:horizontalScale(2*width/3),fontSize:moderateScale(20), fontWeight:'bold', color:'white', textAlign:'center', alignItems:'center', top:verticalScale(55)}}>{positionInfos[position_index].information.title}</Text>   
            <Entypo style={{width:horizontalScale(width/6),fontSize:moderateScale(25), fontWeight:'bold', color:'white', textAlign:'right', alignItems:'center', top:verticalScale(55), paddingRight:moderateScale(15)}} name="cw" onPress={()=>{
              props.navigation.reset({
                index: 0,
                routes: [{ 
                    name: 'Dashboard' ,
                    params: {
                        isTypeUser: false,
                        profile: profile
                    }
                },{
                  name: 'TopNavBar' ,
                    params:  { 
                      screen: 'Main',
                      profile: profile,
                      isTypeUser: false,
                      position_index: position_index,
                      positionInfos: positionInfos
                    }
                }
                ], // user main
            });
            }}/>
          </View>
        </View>
        {busNavBar}
    </>
    
  );
}

export default TopNavBar;
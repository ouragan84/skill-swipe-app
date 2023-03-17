import * as React from 'react';
import { Text, View ,Dimensions, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get('window');


import MyProfile from '../../screens/MyProfile';
// import Dashboard from '../../screens/Dashboard';
import Likes from '../../screens/Likes';
import Messages from '../../screens/Messages';
import Explore from './Explore';
import Main from './Main';

// Icons
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import EditCurrentPosition from './EditCurrentPosition';
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';

import auth from '../../hooks/authentication';



const Tab = createBottomTabNavigator();

function BottomNavBar(props) {

  // console.log('route isTypeUser: ', route.params.isTypeUser)
  //const isTypeUser = props.route.params.isTypeUser;
  const isTypeUser=props.route.params.isTypeUser
  const profile=props.route.params.profile

  const [navColorState, setNavColorState] = React.useState([false, false, false]);



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
          listeners={{
            tabPress: e => {
              setNavColorState([true, false, false])
            }
          }}
          options={{
            tabBarLabel: '',
            
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={moderateScale(30)} color={navColorState[0]? "#28A0BB": "black"} style={{marginBottom: moderateScale(-20)}}/>
            ),
          }}
          
        />
        <Tab.Screen
          name="Main"
          //children={props => <Main {...props} />}
          listeners={{
            tabPress: e => {
              setNavColorState([false, true, false])
            }
          }}
          children={() => <Main isTypeUser={route.params.isTypeUser}/>}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Image style={{height: verticalScale(40), width:horizontalScale(40), marginTop: moderateScale(20)}} source={require('../../assets/images/logo.png')}/>
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          children={() => <Messages isTypeUser={isTypeUser} dashNav={props.navigation}/>}
          listeners={{
            tabPress: e => {
              setNavColorState([false, false, true])
            }
          }}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={moderateScale(30)} color={navColorState[2]? "#28A0BB": "black"} style={{marginBottom: moderateScale(-20)}}/>
            ),
          }}
        />
        
        
      </Tab.Navigator>
  )
  
  return (
    <>
        <View style={{backgroundColor:'white', height:verticalScale(105), width:'100%'}} >
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Entypo style={{width:horizontalScale(width/6),fontSize:moderateScale(25), fontWeight:'bold', color:'#28A0BB', textAlign:'left', alignItems:'center', top:verticalScale(55), paddingLeft:moderateScale(25)}} name="log-out" onPress={async ()=>{
              await auth.deleteToken();
              await auth.deleteCredentials();
              props.navigation.reset({
                index: 0,
                routes: [{
                    name: 'Onboard'
                }
                ], // user main
            });
            }}/>
            <View style={{width:horizontalScale(2*width/3)}}/>
            <Entypo style={{width:horizontalScale(width/6),fontSize:moderateScale(25), fontWeight:'bold', color:'#28A0BB', textAlign:'right', alignItems:'center', top:verticalScale(55), paddingRight:moderateScale(25)}} name="cw" onPress={()=>{
              props.navigation.reset({
                index: 0,
                routes: [{
                    name: 'BottomNavBar' ,
                    params:  { 
                      screen: 'Main',
                      isTypeUser: true,
                      profile: profile
                    }
                }
                ], // user main
            });
            }}/>
          </View>
        </View>
        {userNavBar}
    </>
    
  );
}

export default BottomNavBar;
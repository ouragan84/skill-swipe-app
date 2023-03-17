

import {React, useState}from 'react';
import { styles} from '../../constants/styles';
import { useNavigation } from '@react-navigation/native';


import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Keyboard,
  StyleSheet,
} from 'react-native';
//import ProfileItem from '../components/main/ProfileItem';
//import Icon from '../components/main/Icon';
//import userProfiles from '../data/userProfiles'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';

import MLinputM from '../../components/common/MLinputM';
import NinputM from '../../components/common/NinputM';
import InputM from '../../components/common/InputM';

import ButtonM from '../../components/common/ButtonM';
import ExpItem from '../../components/UserProfileMain/ExpItem';
import ImageUpload from '../../components/common/ImageUpload';
import SeeMore from 'react-native-see-more-inline';



const BusinessProfileSummary = (props) => {

  // const navigation = useNavigation();

  const clickMe = () => {
    console.log("a")
  }

  console.log(props.route.params.profile)

  let profile = props.route.params.profile;

  console.log(profile)
  // const [phoneLocation, setPhoneLocation] = useState(profile.information.city + " CA")

  // const handleDescClick = () => {

  //   props.navigation.navigate('Description', {
  //     description: profile.description
  //   });

  //   Keyboard.dismiss()
  // }

  const [photo, setPhoto] = useState(profile.profilePicture)

  // const handleDeleteExp = () => {
  //   console.log('deleted')
  // }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{paddingBottom:moderateScale(30)}}/>
        <ImageUpload uploadUrl={'/company/set/profile-picture'} setErrorText={() => {}} photo={photo} setPhoto={setPhoto}/>       
        <Text style={{
          fontSize:moderateScale(28),
          fontWeight:'bold',
        }}>{profile.name}</Text>
        
        <View style={{paddingBottom:moderateScale(20)}}/>

        <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
          <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <Text style={{
            fontSize:moderateScale(24),
            fontWeight:'bold',
            marginHorizontal:moderateScale(15),
            marginTop:moderateScale(22),
            marginBottom:moderateScale(10)
          }}>About</Text>
          <Feather style={{
            fontSize:moderateScale(20),
            marginHorizontal:moderateScale(15),
            marginTop:moderateScale(22),
            marginBottom:moderateScale(10)
          }} name='edit'
          onPress={() => props.navigation.navigate('EditNameDescSize', {
            profile: profile
          })}
          />
          </View>
          <View style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:moderateScale(16), color: '#000',fontWeight:'bold'}}>Company Size: </Text>
            <Text style={{
              fontSize:moderateScale(16),
              color: '#000',
              fontWeight:'default',
            }}>{profile.size}</Text> 
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:moderateScale(16), color: '#000',fontWeight:'bold'}}>Industry: </Text>
            <Text style={{
              fontSize:moderateScale(16),
              color: '#000',
              fontWeight:'default',
            }}>{profile.industry}</Text> 
            </View>
            <View style={{paddingBottom:moderateScale(10)}}/>
            <SeeMore linkStyle={{ fontWeight: '500' }} style={{
              fontSize:moderateScale(16),
              color: '#000',
              fontWeight:'default',
              letterSpacing:.3,
            }} numberOfLines={4}>
            {profile.description}  
            </SeeMore> 
          </View>
        </View>
        <View style={{paddingBottom:moderateScale(10)}}/>
      
        {/* <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
          <Text style={{
            fontSize:moderateScale(24),
            fontWeight:'bold',
            marginHorizontal:moderateScale(15),
            marginTop:moderateScale(22),
            marginBottom:moderateScale(10)
          }}>Location</Text>
          <View style={{flexDirection:'row', marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
            <Text style={{fontSize:moderateScale(16), color: '#000',fontWeight:'bold'}}>Location: </Text>
            <Text style={{
              fontSize:moderateScale(16),
              color: '#000',
              fontWeight:'default',
            }}>{phoneLocation ? phoneLocation : "Calculating..."}</Text> 
          </View>
          <View style={{flex:1, justifyContent:"center", alignItems:'center', marginBottom:moderateScale(15)}}>
          <ButtonM name='Recalculate Location' click={()=>console.log('test')}/>
          </View>
        </View> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessProfileSummary;


const stylez = StyleSheet.create({
  image:{
    height: verticalScale(125),
    width: verticalScale(125),
    borderRadius:moderateScale(18),
    alignSelf:'center'
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width:horizontalScale(140),
    borderRadius: moderateScale(18),
    elevation: 3,
    backgroundColor: '#28A0BB',
  },
  modalButtonTextStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width:horizontalScale(140),
    borderRadius: moderateScale(18),
    elevation: 3,
    backgroundColor: '#eeeeee',
    borderWidth:1,
    borderColor:'#bbb'
  },
    cancelButtonTextStyle: {
      fontSize: moderateScale(16),
      fontWeight: 'default',
      letterSpacing: 0.25,
      color: '#111',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      width:'100%'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      padding: 15,
      alignItems: 'center',
      flex:1,
      justifyContent:'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'100%',//horizontalScale(350)
      height:'100%'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliders: {
      margin: moderateScale(20),
      width: horizontalScale(300),
      justifyContent:'center',
      alignContent:'center'
    },
    text: {
      alignSelf: 'center',
      paddingTop: moderateScale(20),
      paddingBottom: moderateScale(20),
      fontSize:moderateScale(15)
    },
    textS: {
      alignSelf: 'center',
      paddingTop: moderateScale(5),
      paddingBottom: moderateScale(5),
      fontSize:moderateScale(15),
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent:'center'
    },
  });
  
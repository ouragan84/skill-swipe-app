

import {React, useState}from 'react';
import { styles} from '../constants/styles';
import Card from '../components/main/Card'
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
import { SafeAreaView } from 'react-navigation';
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';

import MLinputM from '../components/common/MLinputM';
import NinputM from '../components/common/NinputM';
import InputM from '../components/common/InputM';

import ButtonM from '../components/common/ButtonM';
import ExpItem from '../components/UserProfileMain/ExpItem';
import ImageUpload from '../components/common/ImageUpload';
import SeeMore from 'react-native-see-more-inline';



const MyProfile = (props) => {

  const navigation = useNavigation();

  const clickMe = () => {
    console.log("a")
  }

  const userInfo =
  {
    name: 'Austin Wade',
    lastExperience: "Software Engineer",
    photo: require('../assets/images/test.jpg'), city: "San Francisco", state: "CA", description: "I am a sophomore at UCSC majoring in computer engineering with a concentration in systems programming interested in learning all facets of technology where I can gain real-world experience in areas like product management, AI/ML, full-stack development, and more.",
    experiences: [
      {
        title: "Math Inspector",
        description: "10+ years experience in inspecting Mathes varying in size from 1.2 inches to 8-inch megaladons. Created various sketches of Mathes including one that had a 180 degree curve.",
        months: 131,
        isCurrent: false,
        skills: ["Java", 'Ruby', 'Go'],
      },
      {
        title: "Orgee Coordinator",
        description: "Planned and organized various orgees with disabled people.",
        months: 14,
        isCurrent: false,
        skills: ["HTML", 'C++', 'Cock'],
      },
    ],
    key: 'caseex6qfO4TPMYyhorner',
  }
  let experienceCards = []
  let experiences = userInfo.experiences

  const monthsToYM = (m) => {
    let mths = m % 12
    let yrs = Math.floor(m / 12)
    return `${yrs} years, ${mths} months`
  }

  if(experiences){
    for(let i = 0; i < experiences.length; i++){
      expSkills = []
      skills = experiences[i].skills
      for (let j = 0; j < skills.length; j++){
        expSkills.push(
          <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{skills[j]} {j != skills.length-1?"·":""} </Text>
        )
      }

      experienceCards.push(
        
        <View key={i} style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
          <Text style={{fontSize:moderateScale(17),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>
            {experiences[i].title}
          </Text>
          <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>
            {monthsToYM(experiences[i].months)}
          </Text>
          <View style={{paddingBottom:moderateScale(5)}}/>
          <SeeMore linkStyle={{ fontWeight: '500' }} style={{
            fontSize:moderateScale(16),
            color: '#000',
            fontWeight:'default',
            letterSpacing:.3,
          }} numberOfLines={2}>
          {userInfo.experiences[i].description}  
          </SeeMore> 
          <View style={{paddingBottom:moderateScale(5)}}/>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Skills: </Text>
            {expSkills}
          </View>
        </View>
      )
    }
  }else{
    experienceCards.push(
      <Text style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>
        No Experience
      </Text>
    )
  }


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false}>  
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{paddingBottom:moderateScale(50)}}/>
        <ImageUpload/>
        <Text style={{
          fontSize:moderateScale(28),
          fontWeight:'bold',
          textAlign:'center'
        }}>{userInfo.name}</Text>
        
        <Text style={{
          fontSize:moderateScale(18),
          color: '#000',
          fontWeight:'default',
          alignSelf:'center'
        }}>{userInfo.city}, CA</Text> 
        <View style={{paddingBottom:moderateScale(20)}}/>

        <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
          <Text style={{
            fontSize:moderateScale(24),
            fontWeight:'bold',
            marginHorizontal:moderateScale(15),
            marginTop:moderateScale(22),
            marginBottom:moderateScale(10)
          }}>About</Text>
          <View style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
            <SeeMore linkStyle={{ fontWeight: '500' }} style={{
              fontSize:moderateScale(16),
              color: '#000',
              fontWeight:'default',
              letterSpacing:.3,
            }} numberOfLines={4}>
            {userInfo.description}  
            </SeeMore> 
          </View>
        </View>
        <View style={{paddingBottom:moderateScale(10)}}/>

        <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
          <Text style={{
            fontSize:moderateScale(24),
            fontWeight:'bold',
            marginHorizontal:moderateScale(15),
            marginTop:moderateScale(22),
            marginBottom:moderateScale(10)
          }}>Experience</Text>
          {experienceCards}
        </View>
        <View style={{paddingBottom:moderateScale(10)}}/>

        <ButtonM name="Edit Profile & Preferences" click={()=>navigation.navigate("NameDOB")}/>
        <View style={{paddingBottom:moderateScale(10)}}/>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default MyProfile;


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
  
  
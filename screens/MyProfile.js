

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



const MyProfile = (props) => {

  const navigation = useNavigation();

  const clickMe = () => {
    console.log("a")
  }

  const userInfo = {
    "_id": {
      "$oid": "6409abe76c3633aa2ab021f2"
    },
    "personalInformation": {
      "location": [
        {
          "$numberDouble": "37.785834"
        },
        {
          "$numberDouble": "-122.406417"
        }
      ],
      "firstName": "Edgar",
      "lastName": "Baudry",
      "DOB": {
        "$date": {
          "$numberLong": "969778800000"
        }
      },
      "city": "San Francisco",
      // ADDED DESCRIPTION AND AGE
      "age": "20",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    },
    "profilePicture": {
      "name": "default"
    },
    "consumerId": {
      "$oid": "640991f2a761d1b5dfe02538"
    },
    "preferences": {
      "skills": [],
      "hoursPerWeek": [],
      "hoursFlexibility": [],
      "isInPerson": false,
      "isHybrid": false,
      "companySize": []
    },
    "status": {
      "liked": {},
      "interviewing": {},
      "rejected": {}
    },
    "experience": [
      {
        "title": "Ninja killer",
        "start": "2021",
        "end": "2022",
        "description": "Killed ninjas"
      },
      {
        "title": "Curry farter",
        "start": "2021",
        "end": "2022",
        "description": "Fart out curries"
      },
      {
        "title": "Water supplier",
        "start": "2021",
        "end": "2022",
        "description": "Supply water"
      }
    ],
    "__v": {
      "$numberInt": "0"
    }
  }


  const handleDescClick = () => {

    navigation.navigate('Description', {
      description: userInfo.personalInformation.description,
      navigation: navigation
    })

    Keyboard.dismiss()
  }

  const handleDeleteExp = () => {
    console.log('deleted')
  }

  const filterExpData = () => {
    experiences = userInfo.experience

    let data = []

    if(experiences)
    {
      for(let i=0;i<experiences.length; i++)
      {
        let temp = {
          expNumber: i+1,
          title: experiences[i]['title'],
          start: experiences[i]['start'],
          end: experiences[i]['end']
        }
        data.push(temp)
      }
    }

    return data

  }

  const expData = filterExpData()

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <ImageUpload/>
        <View style={{flexDirection:"row", justifyContent:'center', alignContent:'center', width:horizontalScale(360), marginTop:moderateScale(-20), paddingBottom:moderateScale(20)}}>
            <Text style={{fontSize: 20}}>{userInfo.personalInformation.firstName} {userInfo.personalInformation.lastName}, {userInfo.personalInformation.age}</Text>
        </View>
        
        <View style={{width:horizontalScale(360), flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
          <TouchableOpacity onPress={handleDescClick}>
            <View>
              <MLinputM name="Description" placeholder={userInfo.personalInformation.description} isEditable={false}/>
            </View>
            
          </TouchableOpacity>          
        </View> 


        <View
          style={{
            borderBottomColor: 'silver',
            borderBottomWidth: '1%',
          }}
        />
        <View style={{flexDirection:"row", justifyContent:'center', alignContent:'center', width:horizontalScale(360), paddingVertical:moderateScale(15)}}>
          <Text style={{fontSize:moderateScale(20), fontWeight:'bold'}}>
            Location
          </Text>
        </View>

     

        <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
          <NinputM name="Location" placeholder={userInfo.personalInformation.city} width={horizontalScale(200)} isEditable={false}/>
          <View style={{paddingTop: moderateScale(15)}}>
            <Button
              title=" Reset Location"
              onPress={() => props.navigation.navigate('Location', {
                navigation: props.navigation
              })}
            />
          </View>
        </View>


        <View
          style={{
            borderBottomColor: 'silver',
            borderBottomWidth: '1%',
          }}
        />
        <View style={{flexDirection:"row", justifyContent:'center', alignContent:'center', width:horizontalScale(360), paddingVertical:moderateScale(15)}}>
          <Text style={{fontSize:moderateScale(20), fontWeight:'bold'}}>
            Experiences
          </Text>
        </View>

        {
            expData.map((item, index)=> (
        
              <ExpItem
                key={index}
                name={'Experience ' + item.expNumber}
                placeholder={item.title + " (" + item.start + "-" + item.end + ")"}
                handleDeleteExp={handleDeleteExp}
              />
            ))
          }

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
  
  
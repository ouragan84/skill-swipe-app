

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
  Keyboard
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



const Dashboard = (props) => {

  const navigation = useNavigation();

  const clickMe = () => {
    console.log("a")
  }

  const businessInfo = {
    "name":"McDonald's",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    "size": "50+",
    "industry": "Food",
    "profilePicture":{
        "name": "",
    },
    "bannerPicture":{
        "name": ""
    },
    "positions":[
      {
        "name": "Server",
        "description": "Serve the meals"
      },
      {
        "name": "Cashier",
        "description": "Just don't steal the money"
      },
      {
        "name": "Clean",
        "description": "Chill until inspection time, but we won't pay you until then"
      }
    ],
    "consumerId": "12"

  }


  const goToCompanyProfile = () => {

    navigation.navigate('BusinessProfileSummary', {
      businessInfo: businessInfo
    })

    Keyboard.dismiss()
  }



  const handleDeleteExp = () => {
    console.log('deleted')
  }

  const filterExpData = () => {
    positions = businessInfo.positions

    let data = []

    if(positions)
    {
      for(let i=0;i<positions.length; i++)
      {
        let temp = {
          posNumber: i+1,
          name: positions[i]['name'],
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
        
        <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center', margin: moderateScale(25)}}>
        <Image
                source={require('../assets/images/techjob.png')}
                style={{ 
                    height: 48, 
                    width: 48, 
                    borderRadius: 24, 
                    marginTop: moderateScale(10)
                  }}          
            />

          <View style={{
            paddingVertical: moderateScale(15), 
            width: horizontalScale(200),
            margin: moderateScale(12),
            padding: moderateScale(15),
            fontSize: moderateScale(20),
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text>McDonalds</Text>
          </View>
          <View style={{paddingTop: moderateScale(20)}}>
            <FontAwesome5 name="user-edit" style={{fontSize: moderateScale(25), color: "#28A0BB"}} onPress={goToCompanyProfile}/>
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
            Positions
          </Text>
        </View>

        {
            expData.map((item, index)=> (
        
              <ExpItem
                key={index}
                name={'Position ' + item.posNumber}
                placeholder={item.name}
                handleDeleteExp={handleDeleteExp}
              />
            ))
          }

      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
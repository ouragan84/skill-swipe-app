

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
  Keyboard
} from 'react-native';
//import ProfileItem from '../components/main/ProfileItem';
//import Icon from '../components/main/Icon';
//import userProfiles from '../data/userProfiles'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-navigation';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';

import MLinputM from '../../components/common/MLinputM';
import NinputM from '../../components/common/NinputM';
import InputM from '../../components/common/InputM';

import ButtonM from '../../components/common/ButtonM';
import ExpItem from '../../components/UserProfileMain/ExpItem';
import ImageUpload from '../../components/common/ImageUpload';



const BusinessProfileSummary = ({route}) => {

  const navigation = useNavigation();

  const clickMe = () => {
    console.log("a")
  }

  const businessInfo = route.params.businessInfo

  const handleDescClick = () => {

    navigation.navigate('Description', {
      description: businessInfo.description,
      navigation: navigation
    })

    Keyboard.dismiss()
  }

  const handleDeleteExp = () => {
    console.log('deleted')
  }

  const filterExpData = () => {
    experiences = businessInfo.experience

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
            <Text style={{fontSize: 20}}>{businessInfo.name}</Text>
        </View>
        
        <View style={{width:horizontalScale(360), flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
          <TouchableOpacity onPress={handleDescClick}>
            <View>
              <MLinputM name="Description" placeholder={businessInfo.description} isEditable={false}/>
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
          <NinputM name="Location" placeholder={businessInfo.city} width={horizontalScale(200)} isEditable={false}/>
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

export default BusinessProfileSummary;
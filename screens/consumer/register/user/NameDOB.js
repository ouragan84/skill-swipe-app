import React, { useState } from 'react';
import {Text, SafeAreaView, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import InputM from '../../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';
import * as Location from 'expo-location';


const NameDOB = (props) => {
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleText = (text) => {
    if (text.length > 10) return text.substring(0,10)
    // console.log(text)
    let data = text.split("").filter(i => i !== '/')
    if (data.length === 3){
      return `${text.substring(0, 2)}/${text.substring(2)}`
    }
    if (data.length === 5){
      return `${text.substring(0, 5)}/${text.substring(5)}`
    }
    return text
  }

  const sendInfo = async () => {
    fetchProtected('/user/set/personal-info', 'POST', {
      firstName,
      lastName,
      DOB: date
    }, setErrorText, fetchLocation, props.navigation)
  }

  // later try to call Location.js in components instead
  const fetchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    // Handle Permission Denied
    if (status !== 'granted') {
      setErrorText('Permission to access location was denied');
      return;
    }
    else
    {
      const location = await Location.getCurrentPositionAsync({}); 

      // console.log(location)

      fetchProtected('/user/set/location', 'POST', {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }, setErrorText, () => props.navigation.navigate('ExperienceList', {num:1}), props.navigation)

    }
  }


  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:50}}>Tell us your name</Text>
        <InputM name="First Name" placeholder="Enter your first name" onChangeValue={setFirstName} value={firstName}/>
        <InputM name="Last Name" placeholder="Enter your last name" onChangeValue={setLastName} value={lastName}/>
        <InputM name="Date of Birth" placeholder="Enter your date of birth" onChangeValue={(text) => {
          setDate(
            handleText(text)
          );
        }} value={date} numeric={true} />
        <View style={{paddingBottom:moderateScale(30)}}/>
        <Text style={{height:verticalScale(40), color:'#c22'}}>{errorText}</Text>
        {/* TODO CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
        <ButtonM name="Confirm" click={sendInfo} />
        </SafeAreaView>

      </TouchableWithoutFeedback>
  );
};

export default NameDOB;
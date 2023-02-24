import React, { useState } from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import { moderateScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmailConfirmation = (props) => {
  const [email, setEmail] = useState("abc@gmail.com")

  const clickMe = () => {
    console.log("c")
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(30), fontWeight:'bold', paddingBottom:10}}>We sent you an email</Text>
      <Text style={{fontSize:moderateScale(15)}}>Check your inbox to confirm {email}</Text>
      <MCIcon style={{paddingTop:moderateScale(50), fontSize:moderateScale(120),}} name="email-send-outline"/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Send Again" click={clickMe}/>
    </SafeAreaView>
  );
};

export default EmailConfirmation;
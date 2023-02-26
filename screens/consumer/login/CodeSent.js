import React, { useState } from 'react';
import {Text, TextInput, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected} from '../../../hooks/webRequestHelper';


const ProfileDetails = (props) => {
  const resend = async () => {
    await fetchUnprotected('/consumer/send/passwordreset/code', 'POST', {
      email: props.route.params.email.toLowerCase()
    }, () => {}, () => {})
  }

  const checkCode = async () => {
    await fetchUnprotected('/consumer/check/passwordreset/code', 'POST', {
      email: props.route.params.email.toLowerCase(),
      code: number
    }, setErrorText, (response) => {props.navigation.navigate('ResetPassword', {reset_token: response.token, email: props.route.params.email.toLowerCase()})})
  }

  const [number, onChangeNumber] = useState('');
  const [errorText, setErrorText] = useState("");

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:moderateScale(15)}}>
        We sent you a code at {props.route.params.email}
      </Text>
      <Text style={{fontSize:moderateScale(15), paddingBottom:moderateScale(50)}}>Enter it below to verify your identity.</Text>
      
      <TextInput
        style={{
          fontSize:moderateScale(40),
          'letterSpacing': 5
        }}
        maxLength={6}
        keyboardType = 'number-pad'
        onChangeText={onChangeNumber}
        value={number}
        placeholder="000000"
       /> 

      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={checkCode} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <Text onPress={resend} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Resend Code</Text>
    </SafeAreaView>
  );
};

export default ProfileDetails;
import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected} from '../../../hooks/webRequestHelper';

const ForgotPassword = (props) => {

  const sendPasswordResetEmail = async () => {
    await fetchUnprotected('/consumer/send/passwordreset/code', 'POST', {
      email: email.toLowerCase()
    }, setErrorText, () => {props.navigation.navigate('CodeSent', {email: email.toLowerCase()})}, true)
  }

  const [email, setEmail] = useState(props.route.params.email);
  const [errorText, setErrorText] = useState("");

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>
        What's your email?
      </Text>
      <InputM name="Email" placeholder="Enter your email" value={email} onChangeValue={setEmail} autoCapitalize='none' autoCorrect={false} autoComplete='email'/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={sendPasswordResetEmail} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
    </SafeAreaView>
  );
};

export default ForgotPassword;
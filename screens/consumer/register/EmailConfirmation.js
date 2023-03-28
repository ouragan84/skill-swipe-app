import React, { useState, useEffect } from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import { moderateScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchUnprotected, fetchProtected, checkConsumerStatusAndNavigate} from '../../../hooks/webRequestHelper';

const EmailConfirmation = (props) => {
  const [email, setEmail] = useState(props.route.params.email.toLowerCase());
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchProtected('/consumer/is-confirmed', 'GET', null, () => {}, startCreation, props.navigation)
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  const resend = async () => {
    await fetchProtected('/consumer/send/confirmation/email', 'GET', null, setErrorText, () => {}, props.navigation)
  }

  const startCreation = () => {
    checkConsumerStatusAndNavigate(props.navigation);
  }

  const goBack = async () => {
    await fetchProtected('/consumer/delete', 'DELETE', null, () => {}, () => {
      if(props.route.params.redirectToSignIn){
        props.navigation.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        });
      }else{
        props.navigation.goBack({email: props.route.params.email, password: props.route.params.password});
      }
    }, props.navigation)
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(30), fontWeight:'bold', paddingBottom:10}}>We sent you an email</Text>
      <Text style={{fontSize:moderateScale(15)}}>Check your inbox to confirm {email}</Text>
      <MCIcon style={{paddingTop:moderateScale(50), fontSize:moderateScale(120),}} name="email-send-outline"/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Send Again" click={resend}/>
      <View style={{paddingBottom:moderateScale(10)}}/>
      <ButtonM name="Go Back" click={goBack}/>
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
    </SafeAreaView>
  );
};

export default EmailConfirmation;
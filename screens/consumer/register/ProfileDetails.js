import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected} from '../../../hooks/webRequestHelper';
import auth from '../../../hooks/authentication';


const ProfileDetails = (props) => {

  const isTypeUser = props.route.params;

  const confirm = async () => {
    await fetchUnprotected('/consumer/register', 'POST', {
      email : "edgar.baudry@gmail.com", 
      password : "abc", 
      termsAndConditions : true, 
      isTypeUser: isTypeUser
    }, setErrorText, registerConsumer)
  }

  const registerConsumer = async (token) => {
    await auth.saveToken(token);
    await auth.saveEmail("");
    await auth.savePassword("");
    await fetchProtected('/consumer/send/confirmation/email', 'GET', null, setErrorText, 
    () => {props.navigation.navigate('EmailConfirmation', {email: ""})})
  }

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
    console.log(showPassword)
  }

  const [showPassword, setShowPassword] = useState(false)
  const [errorText, setErrorText] = useState("");

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Profile Details</Text>
      <InputM name="Email" placeholder="Enter your email"/>
      <View>      
        <InputM name="Password" placeholder="Set your password" password={!showPassword}/>
        <Icon style={{color:"#888", fontSize: moderateScale(25), position:'absolute', top:verticalScale(30), left:horizontalScale(270)}} onPress={changeShowPassword} name={showPassword ? "eye" : "eye-with-line"}/>
      </View>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={confirm} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
    </SafeAreaView>
  );
};

export default ProfileDetails;
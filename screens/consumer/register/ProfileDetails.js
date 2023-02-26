import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected} from '../../../hooks/webRequestHelper';
import * as auth from '../../../hooks/authentication';


const ProfileDetails = (props) => {

  const isTypeUser = props.route.params.isTypeUser;

  const registerConsumer = async () => {
    console.log("about to register consumer")
    await fetchUnprotected('/consumer/register', 'POST', {
      email: email.toLowerCase(),
      password,
      termsAndConditions : true, 
      isTypeUser
    }, setErrorText, sendConfirmation)
  }

  const sendConfirmation = async (response) => {
    try{
      setErrorText("");
      await auth.saveToken(response.token);
      await auth.saveCredentials(email.toLowerCase(), password);
      await fetchProtected('/consumer/send/confirmation/email', 'GET', null, () => {}, 
      () => {props.navigation.navigate('EmailConfirmation', {email: email.toLowerCase(), password, isTypeUser})}, props.navigation)
    } catch (err){
      console.log(err);
    }
  }

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
    console.log(showPassword)
  }

  const [showPassword, setShowPassword] = useState(false)
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState(props.route.params.email);
  const [password, setPassword] = useState(props.route.params.password);


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Profile Details</Text>
      <InputM name="Email" placeholder="Enter your email" value={email} onChangeValue={setEmail} autoCapitalize='none' autoCorrect={false} autoComplete='email'/>
      <View>      
        <InputM name="Password" placeholder="Set your password" password={!showPassword} value={password} onChangeValue={setPassword} autoCapitalize='none' autoCorrect={false} autoComplete='true' />
        <Icon style={{color:"#888", fontSize: moderateScale(25), position:'absolute', top:verticalScale(30), left:horizontalScale(270)}} onPress={changeShowPassword} name={showPassword ? "eye" : "eye-with-line"}/>
      </View>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={registerConsumer} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <Text onPress={() => props.navigation.reset({index: 0, routes: [{name: 'SignIn'}], })} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Already Have An Account?</Text> 

    </SafeAreaView>
  );
};

export default ProfileDetails;
import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected, checkConsumerStatusAndNavigate} from '../../../hooks/webRequestHelper';
import * as auth from '../../../hooks/authentication';

const SignIn = (props) => {

  const signInConsumer = async () => {
    await fetchUnprotected('/consumer/login', 'POST', {
      email: email.toLowerCase(),
      password
    }, setErrorText, goToNextScreen)
  }

  const goToNextScreen = async (response) => {
    try{
      console.log("it worked")
      setErrorText("");
      await auth.saveToken(response.token);
      await auth.saveCredentials(email, password);
      checkConsumerStatusAndNavigate(props.navigation);
    } catch (err){
      console.error(err);
    }
  }

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState("");

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Sign In</Text>
      <InputM name="Email" placeholder="Enter your email" value={email} onChangeValue={setEmail} autoCapitalize='none' autoCorrect={false} autoComplete='email'/>
      <View>      
        <InputM name="Password" placeholder="Enter your password" password={!showPassword}  value={password} onChangeValue={setPassword} autoCapitalize='none' autoCorrect={false} autoComplete='true' />
        <Icon style={{color:"#888", fontSize: moderateScale(25), position:'absolute', top:verticalScale(30), left:horizontalScale(270)}} onPress={changeShowPassword} name={showPassword ? "eye" : "eye-with-line"}/>
      </View>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={signInConsumer} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <Text onPress={() => props.navigation.navigate('ForgotPassword', {email})} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Forgot your password?</Text> 
      <Text onPress={() => props.navigation.navigate('SignUp')} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Create an account</Text> 
    </SafeAreaView>
  );
};

export default SignIn;
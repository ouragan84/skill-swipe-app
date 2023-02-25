import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';

const SignIn = (props) => {
  const clkMe = () => {
    props.navigation.navigate('TestScreen')
  }

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
    console.log(showPassword)
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Sign In</Text>
      <InputM name="Email" placeholder="Enter your email"/>
      <View>      
        <InputM name="Password" placeholder="Enter your password" password={!showPassword}/>
        <Icon style={{color:"#888", fontSize: moderateScale(25), position:'absolute', top:verticalScale(30), left:horizontalScale(270)}} onPress={changeShowPassword} name={showPassword ? "eye" : "eye-with-line"}/>
      </View>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={clkMe} />
      <View style={{paddingBottom:moderateScale(20)}}/>
      <Text onPress={() => props.navigation.navigate('ForgotPassword')} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Forgot your password?</Text>
    </SafeAreaView>
  );
};

export default SignIn;
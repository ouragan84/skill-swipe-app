import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected, fetchCustomToken} from '../../../hooks/webRequestHelper';


const ResetPassword = (props) => {

  const submitNewPassword = async () => {
    await fetchCustomToken('/consumer/reset/password', 'PUT', props.route.params.reset_token, {
      password
    }, setErrorText, () => props.navigation.navigate('SignIn'));
  }

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
    console.log(showPassword)
  }

  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(50)}}>Reset your password</Text>
      <View>      
        <InputM name="Password" placeholder="Enter your new password" password={!showPassword} value={password} onChangeValue={setPassword} autoCapitalize='none' autoCorrect={false} autoComplete='true' />
        <Icon style={{color:"#888", fontSize: moderateScale(25), position:'absolute', top:verticalScale(30), left:horizontalScale(270)}} onPress={changeShowPassword} name={showPassword ? "eye" : "eye-with-line"}/>
      </View>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Submit" click={submitNewPassword} />
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
    </SafeAreaView>
  );
};

export default ResetPassword;
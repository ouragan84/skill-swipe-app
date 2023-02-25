import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import LogoImageM from '../../../components/common/LogoImageM'
import { horizontalScale, moderateScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import {linkToPage} from '../../../hooks/webRequestHelper'

const clickMe = () => {
  console.log("c")
}

const SignUp = (props) => {
  const clkMe = (isTypeUser) => {
    props.navigation.navigate('ProfileDetails', {isTypeUser})
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <LogoImageM source={require('../../../assets/images/logo.png')}/>
      <Text style={{fontSize:moderateScale(18), fontWeight:"bold", paddingBottom:50}}>Sign up to continue</Text>
      <ButtonM name="Register as Applicant" click={() => clkMe(true)}/>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Register as Company" click={() => clkMe(false)}/>
      <View style={{width:horizontalScale(210), paddingTop:moderateScale(70), flexDirection:"row", justifyContent:"space-between"}}>
        <Text onPress={() => linkToPage('/terms-of-use')} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Terms of use</Text>
        <Text onPress={() => linkToPage('/about')} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
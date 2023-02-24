import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import LogoImageM from '../../../components/common/LogoImageM'
import { horizontalScale, moderateScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';

const clickMe = () => {
  console.log("c")
}

const TestScreen = (props) => {
  const clkMe = () => {
    props.navigation.navigate('ProfileDetails')
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <LogoImageM source={require('../../../assets/images/logo.png')}/>
      <Text style={{fontSize:moderateScale(18), fontWeight:"bold", paddingBottom:50}}>Sign up to continue</Text>
      <ButtonM name="Register as Applicant" click={clkMe}/>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Register as Company" click={clkMe}/>
      <View style={{width:horizontalScale(210), paddingTop:moderateScale(70), flexDirection:"row", justifyContent:"space-between"}}>
        <Text onPress={clickMe} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Terms of use</Text>
        <Text onPress={clickMe} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
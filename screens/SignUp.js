import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import InputM from '../components/common/InputM';
import CButtonM from '../components/common/CButtonM';
import SRBoxM from '../components/common/SRBoxM';
import LogoImageM from '../components/common/LogoImageM'
import { horizontalScale, moderateScale } from '../components/helper/Metrics';
import ButtonM from '../components/common/ButtonM';
import { styles } from '../constants/styles';

const clickMe = () => {
  console.log("c")
}

const TestScreen = (props) => {

  const goToUserProfile = () => {
    props.navigation.navigate('BottomNavBar', { screen: 'Profile' })
  }

  const clkMe = () => {
    props.navigation.navigate('ProfileDetails')
  }

  

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <LogoImageM source={require('../assets/images/logo.png')}/>
      <Text style={{fontSize:moderateScale(18), fontWeight:"bold", paddingBottom:50}}>Sign up to continue</Text>
      <ButtonM name="Continue with email" click={clkMe}/>
      <View style={{width:horizontalScale(210), paddingTop:moderateScale(70), flexDirection:"row", justifyContent:"space-between"}}>
        <Text onPress={clickMe} style={{color:'#28A0BB'}}>Terms of use</Text>
        <Text onPress={clickMe} style={{color:'#28A0BB'}}>Privacy Policy</Text>
      </View>
      <ButtonM name="Go to user profile since authenticated" click={goToUserProfile}/>
    </SafeAreaView>
  );
};

export default TestScreen;
import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';

const ForgotPassword = (props) => {
  const clkMe = () => {
    props.navigation.navigate('CodeSent')
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>
        What's your email?
      </Text>
      <InputM name="Email" placeholder="Enter your email"/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={clkMe} />
      <View style={{paddingBottom:moderateScale(20)}}/>
    </SafeAreaView>
  );
};

export default ForgotPassword;
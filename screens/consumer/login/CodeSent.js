import React, { useState } from 'react';
import {Text, TextInput, SafeAreaView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';

const ProfileDetails = (props) => {
  const clkMe = () => {
    console.log("poopy buttcrack")
  }

  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:moderateScale(15)}}>
        We sent you a code
      </Text>
      <Text style={{fontSize:moderateScale(15), paddingBottom:moderateScale(50)}}>Enter it below to verify your identity.</Text>
      
      <TextInput
        style={{
          fontSize:moderateScale(40),
          'letterSpacing': 5
        }}
        maxLength={6}
        keyboardType = 'number-pad'
        onChangeText={onChangeNumber}
        value={number}
        placeholder="000000"
       /> 

      <View style={{paddingBottom:moderateScale(50)}}/>
      <ButtonM name="Confirm" click={() => props.navigation.navigate('ResetPassword')} />
      <View style={{paddingBottom:moderateScale(20)}}/>
      <Text onPress={clkMe} style={{fontSize: moderateScale(15),color:'#28A0BB'}}>Didn't receive email?</Text>
    </SafeAreaView>
  );
};

export default ProfileDetails;
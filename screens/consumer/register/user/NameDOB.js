import React, { useState } from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import InputM from '../../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';


function clickMe(){
  console.log("poopy buttcrack")
}

const NameDOB = (props) => {

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:50}}>Tell us your name</Text>
      <InputM name="First Name" placeholder="Enter your first name" />
      <InputM name="Last Name" placeholder="Enter your first name" />
      <View style={{paddingBottom:moderateScale(50)}}/>
      {/* CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={() => props.navigation.navigate('Experience')} />
    </SafeAreaView>
  );
};

export default NameDOB;
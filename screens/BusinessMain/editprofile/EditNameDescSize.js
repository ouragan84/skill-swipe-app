import React, { useState } from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import InputM from '../../../components/common/InputM';
import MLinputM from '../../../components/common/MLinputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../components/common/CButtonM';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NinputM from '../../../components/common/NinputM';
import { useNavigation } from '@react-navigation/native';


function clickMe(){
  console.log("poopy buttcrack")
}

const EditNameDescSize = ({route}) => {
  const navigation = useNavigation();
  const businessInfo = route.params.businessInfo
  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(28), fontWeight:'bold', paddingBottom:50}}>Edit Details</Text>
      <InputM name="Name of Business" placeholder="Enter your company's name" />
      <MLinputM name="Company Description" placeholder="Talk about your company and its goals"/>
      <InputM name="Company Size" placeholder="Enter your company's size" numeric={true}/>      

      <View style={{paddingBottom:moderateScale(30)}}/>
      {/* TODO CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={() => navigation.navigate('EditIndustry', {
      businessInfo: businessInfo
    })} />
    </SafeAreaView>
  );
};


const stylez = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: moderateScale(20),
    width: horizontalScale(300),
    justifyContent:'center',
    alignContent:'center'
  },
  text: {
    alignSelf: 'center',
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(5)  ,
    fontSize:moderateScale(15)
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});

export default EditNameDescSize;
import React, { useState } from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NinputM from '../../../../components/common/NinputM';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';


const GetStarted = (props) => {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [size, setSize] = useState();
  const [errorText, setErrorText] = useState("");

  const confirm = () => {
    fetchProtected('/company/set/company-information', 'POST', {
      name,
      description,
      size: Number(size)
    }, setErrorText, () => props.navigation.navigate('Industry'), props.navigation);
  }


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:50}}>Let's get started</Text>
      <InputM name="Name of Business" placeholder="Enter your company's name" value={name} onChangeValue={setName}/>
      <MLinputM name="Company Description" placeholder="Talk about your company and its goals" value={description} onChangeValue={setDescription}/>
      <InputM name="Company Size" placeholder="Enter your company's size" numeric={true} value={size} onChangeValue={setSize}/>      

      {/* TODO CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>

      <ButtonM name="Confirm" click={confirm} />
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

export default GetStarted;
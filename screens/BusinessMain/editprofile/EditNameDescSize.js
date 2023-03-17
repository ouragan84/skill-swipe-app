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
import { fetchProtected } from '../../../hooks/webRequestHelper';


function clickMe(){
  console.log("poopy buttcrack")
}

const EditNameDescSize = (props) => {

  const profile = props.route.params.profile

 const [name, setName] = useState(profile.name)
 const [description, setDescription] = useState(profile.description)
 const [size, setSize] = useState(`${profile.size}`)

 const [errorText, setErrorText] = useState('');


  // const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(28), fontWeight:'bold', paddingBottom:50}}>Edit Details</Text>
      <InputM name="Name of Business" placeholder="Enter your company's name" value={name} onChangeValue={setName}/>
      <MLinputM name="Company Description" placeholder="Talk about your company and its goals" value={description} onChangeValue={setDescription}/>
      <InputM name="Company Size" placeholder="Enter your company's size" numeric={true} value={size} onChangeValue={setSize}/>

      <Text style={{paddingTop:20, color:'#c22'}}>{errorText}</Text>
      <View style={{paddingBottom:moderateScale(10)}}/>


      {/* TODO CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={() => {

        if(size.length == 0 || !Number(size) || Number(size)==0)
          return setErrorText("Please specify your company's size ")
        
        fetchProtected('/company/set/company-information', 'POST', {
          name, 
          description, 
          size: Number(size)
        }, setErrorText, () => {
          props.navigation.navigate('EditIndustry', {
          profile: profile
        })}, props.navigation)}}
        />

    
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
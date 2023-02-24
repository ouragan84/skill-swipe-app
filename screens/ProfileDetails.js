import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import InputM from '../components/common/InputM';
import CButtonM from '../components/common/CButtonM';
import { moderateScale } from '../components/helper/Metrics';
import ButtonM from '../components/common/ButtonM';

function clickMe(props){
  console.log("c")
}

const ProfileDetails = (props) => {
  const clkMe = () => {
    props.navigation.navigate('Describe')
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Profile Details</Text>
      <InputM name="First Name" placeholder="Johnathan"/>
      <InputM name="Last Name" placeholder="Carpenter"/>
      <CButtonM/>
      <ButtonM name="Confirm" click={clkMe}/>
    </SafeAreaView>
  );
};

export default ProfileDetails;
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
  const [date, setDate] = useState("");
  const handleText = (text) => {
    if (text.length > 10) return text.substring(0,10)
    console.log(text)
    let data = text.split("").filter(i => i !== '/')
    if (data.length === 3){
      return `${text.substring(0, 2)}/${text.substring(2)}`
    }
    if (data.length === 5){
      return `${text.substring(0, 5)}/${text.substring(5)}`
    }
    return text
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:50}}>Tell us your name</Text>
      <InputM name="First Name" placeholder="Enter your first name" />
      <InputM name="Last Name" placeholder="Enter your last name" />
      <InputM name="Date of Birth" placeholder="Enter your date of birth" onChangeValue={(text) => {
        setDate(
          handleText(text)
        );
      }} value={date} numeric={true} />
      <View style={{paddingBottom:moderateScale(50)}}/>
      
      {/* TODO CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={() => props.navigation.navigate('Experience')} />
    </SafeAreaView>
  );
};

export default NameDOB;
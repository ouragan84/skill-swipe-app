import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import ButtonM from '../components/common/ButtonM';
import ImageM from '../components/common/ImageM'
import InputM from '../components/common/InputM'
import SRButtonM from '../components/common/SRButtonM'
import ThreeDotsM from '../components/special/ThreeDotsM';
import { styles } from '../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';

export default function TestCS() {

  const clickMe = () => {
    console.log("a")
  }
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ImageM source={require('../assets/images/test.jpg')}/>
        <Text style={styles.textOB1style}>Job Hunt Made Easy</Text>
        <Text style={styles.textOB2style}>Skill Swipe is a geo-social employment platform through which you can easily aquire jobs in your area!</Text>
      </View> */}
      <InputM name="First name" placeholder={"Johnathan"}/>
      <InputM name="Last name" placeholder={"Carpenter"}/>
      <SRButtonM name="Woman" click={clickMe}/>
      <ThreeDotsM name={[true,false,false]}/>
      <ButtonM name="Create an account" click={clickMe}/>
      <Text style={{marginTop:moderateScale(25),fontSize: moderateScale(15)}}>Already have an account? <Text onPress={clickMe} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text></Text>
    </View>
  );
}
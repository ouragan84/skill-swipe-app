import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ButtonM from '../components/common/ButtonM';
import ImageM from '../components/common/ImageM'
import InputM from '../components/common/InputM'
import SRButtonM from '../components/common/SRButtonM'
import ThreeDotsM from '../components/special/ThreeDotsM';

export default function TestCS() {

  const clickMe = () => {
    console.log("a")
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ImageM source={require('../assets/images/test.jpg')}/>
        <Text style={{color: '#28A0BB', fontSize: 32, fontWeight: 'bold',marginBottom:20}}>Job Hunt Made Easy</Text>
        <Text style={{textAlign: 'center',fontSize: 16, width:340}}>Skill Swipe is a geo-social employment platform through which you can easily aquire jobs in your area!</Text>
      </View> */}
      <InputM name="First name" placeholder={"Johnathan"}/>
      <InputM name="Last name" placeholder={"Carpenter"}/>
      <SRButtonM name="Woman"/>
      <ThreeDotsM name={[true,false,false]}/>
      <ButtonM name="Create an account" click={clickMe}/>
      <Text style={{marginTop:25,fontSize: 16}}>Already have an account? <Text onPress={clickMe} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text></Text>
    </View>
  );
}
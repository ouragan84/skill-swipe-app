import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonM from './ButtonM';

export default function TestCS() {

  const clickMe = () => {
    console.log("a")
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonM name="Create an account" click={clickMe}/>
      <Text style={{marginTop:25}}>Already have an account? <Text onPress={clickMe} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text>
      </Text>
    </View>
  );
}
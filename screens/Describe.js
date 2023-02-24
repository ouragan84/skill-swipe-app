import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import InputM from '../components/common/InputM';
import CButtonM from '../components/common/CButtonM';
import NavbarM from '../components/common/NavbarM';
import SRBoxM from '../components/common/SRBoxM';
import LogoImageM from '../components/common/LogoImageM'
import { horizontalScale, moderateScale } from '../components/helper/Metrics';
import ButtonM from '../components/common/ButtonM';
import { styles } from '../constants/styles';
import { TextInput } from 'react-native-gesture-handler';

const clickMe = () => {
  console.log("c")
}

const Describe = (props) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(30), fontWeight:'bold', paddingBottom:10}}>Describe yourself</Text>
      <Text style={{color:'#000',fontSize:moderateScale(15), paddingBottom:40, justifyContent: 'center', textAlign:'center', width:horizontalScale(300)}}>Talk about your interests, passions, your current position, or any other details you want to let employers know.</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        style={styles.inputBigBoxStyle}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.placeholder}
        keyboardType="numeric"
      /> 
      <View style={{paddingTop:moderateScale(50)}}></View>
      <ButtonM name="Confirm" click={() => props.navigation.navigate('ProfileDetails')}/>
    </SafeAreaView>
  );
};

export default Describe;
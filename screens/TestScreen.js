import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import InputM from '../components/common/InputM';
import CButtonM from '../components/common/CButtonM';
import SRBoxM from '../components/common/SRBoxM';
import LogoImageM from '../components/common/LogoImageM'
import { horizontalScale, moderateScale } from '../components/helper/Metrics';
import ButtonM from '../components/common/ButtonM';
import { styles } from '../constants/styles';
import { TextInput } from 'react-native-gesture-handler';
import Confirm from '../components/helper/Confirm';

const clickMe = () => {
  console.log("c")
}

const TestScreen = (props) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <InputM name="First Name" placeholder="Enter your first name"/>
      <Confirm buttonName="Submit" message="Are you sure you want to do this?" modalButtonText="Yes, of course" onModalButtonClick={()=>{props.navigation.navigate('Industry')}}/>
    </SafeAreaView>
  );
};

export default TestScreen;
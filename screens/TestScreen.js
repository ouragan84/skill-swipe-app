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

const TestScreen = (props) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width: 400, height: 700, backgroundColor: 'white', borderWidth: 2, borderColor: 'black',justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 26}}>There are no more liked applicants.</Text>
        <Text style={{fontSize: 20}}></Text>
        <Text style={{fontSize: 22}}>Please check out your liked applicants!</Text>
        <Text style={{fontSize: 20}}></Text>
        <Text style={{fontSize: 20}}></Text>
        <ButtonM name = "See Liked Applicants" click = {() => props.navigation.navigate('CompanyMessages')}/>
      </View>
    </SafeAreaView>
  );
};

// const TestScreen = (props) => {
//   const [number, onChangeNumber] = React.useState('');

//   return (
//     <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
//       <InputM name="First Name" placeholder="Enter your first name"/>
//       <CButtonM/>
//     </SafeAreaView>
//   );
// };

export default TestScreen;
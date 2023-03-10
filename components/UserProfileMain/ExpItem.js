

import {React, useState}from 'react';
import { styles} from '../../constants/styles'
import { useNavigation } from '@react-navigation/native';


import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Keyboard
} from 'react-native';
//import ProfileItem from '../components/main/ProfileItem';
//import Icon from '../components/main/Icon';
//import userProfiles from '../data/userProfiles'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-navigation';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics'

import MLinputM from '../common/MLinputM';
import NinputM from '../common/NinputM';
import InputM from '../common/InputM';

import ButtonM from '../common/ButtonM';



const ExpItem = (props) => {

  const navigation = useNavigation();

  const handleDeleteExp = () => {
    console.log('deleted')
  }

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center', paddingRight: moderateScale(20)}}>
        <NinputM name={props.name} placeholder={props.placeholder} width={horizontalScale(270)} isEditable={false}/>
        <View style={{paddingTop: moderateScale(20)}}>
        <FontAwesome5 name="trash" style={{fontSize: moderateScale(25), color: "#ff0000"}} onPress={handleDeleteExp}/>
        </View>
    </View>
  );
};

export default ExpItem;
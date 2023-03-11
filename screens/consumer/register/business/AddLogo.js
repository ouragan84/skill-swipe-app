import React, { useState } from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image} from 'react-native';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NinputM from '../../../../components/common/NinputM';
import { styles } from '../../../../constants/styles';


function clickMe(){
  console.log("poopy buttcrack")
}

const AddLogo = (props) => {

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(30), fontWeight:'bold', paddingBottom:50}}>Add your company logo</Text>
      
      <Image style={styles.companyLogoImgStyle} source={require('../../../../assets/images/test.jpg')}/>
      <View style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-30), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
        <Icon onPress={clickMe} name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
      </View>

      <View style={{paddingBottom:moderateScale(30)}}/>
      {/* CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={() => props.navigation.navigate('Position')} />
    </SafeAreaView>
  );
};

export default AddLogo;
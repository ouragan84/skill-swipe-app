import React, { useState } from 'react';
import {Text, SafeAreaView, View, Image} from 'react-native';
import InputM from '../../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import LogoImageM from '../../../../components/common/LogoImageM';
import { styles } from '../../../../constants/styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

function clickMe(){
  console.log("poopy buttcrack")
}

const Profile = (props) => {

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold'}}>Finalize your Profile</Text>
      <View>
        <Image style={styles.logoImgStyle} source={require('../../../../assets/images/test.jpg')}/>
        <TouchableHighlight onPress={clickMe} style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-60), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
          <Icon name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
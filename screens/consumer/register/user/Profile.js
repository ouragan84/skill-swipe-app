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
import MLinputM from '../../../../components/common/MLinputM';

function clickMe(){
  console.log("poopy buttcrack")
}

const Profile = (props) => {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Carpenter")

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold'}}>Finalize your Profile</Text>
      <Text style={{fontSize:moderateScale(18), paddingVertical:moderateScale(20)}}>Please Select a profile picture</Text>
      <View>
        <Image style={styles.logoImgStyle} source={require('../../../../assets/images/test.jpg')}/>
        <View style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-30), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
          <Icon onPress={clickMe} name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
        </View>
      </View>
      <Text style={{fontSize:moderateScale(20), fontWeight:'bold'}}>{firstName} {lastName}</Text>
      <View style={{paddingTop:40}}/>
      <MLinputM name="Description" placeholder="Talk about yourself and describe your objective."/>
      <View style={{paddingTop:40}}/>
      <ButtonM name="Confirm" click={() => props.navigation.navigate('TestScreen')} />
    </SafeAreaView>
  );
};

export default Profile;
import React, { useState, useEffect } from 'react';
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
import ImageUpload from '../../../../components/common/ImageUpload'
import { fetchUnprotected, fetchProtected , uploadFile, getPhoto} from '../../../../hooks/webRequestHelper'


const AddLogo = (props) => {

  const [errorText, setErrorText] = useState("");
  const [photo, setPhoto] = useState(null);

  // const setInitialDetail = () => {
  //   fetchProtected('/company/get/profile-picture', 'GET', null, setErrorText, (response) => {
      
  //     setPhoto(response.pictureUrl);



  //   }, props.navigation);
  // }

  useEffect(() => {
    fetchProtected('/company/get/complete-info', 'GET', null, setErrorText, (response) => {
      // console.log("first response", response)
      // setFirstName(response.user.personalInformation.firstName);
      // setLastName(response.user.personalInformation.lastName);
      setPhoto(response.company.profilePicture);

      // fetchUnprotected(`/get/image-url/${response.user.profilePicture.name}`, 'GET', null, setErrorText, (response) => {
      //   // console.log("photo response", response)
      //   setPhoto(response.url);
      // }, false)

    }, props.navigation);
  }, []);

  // setInitialDetail();


  const confirm = () => {
    // console.log();
    props.navigation.navigate('Position', {num: 1})
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(30), fontWeight:'bold', paddingBottom:50}}>Add your company logo</Text>
      
      {/* <Image style={styles.companyLogoImgStyle} source={require('../../../../assets/images/test.jpg')}/>
      <View style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-30), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
        
        <Icon onPress={clickMe} name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
      </View> */}

      <ImageUpload uploadUrl={'/company/set/profile-picture'} setErrorText={setErrorText} photo={photo} setPhoto={setPhoto}/>

      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>

      {/* CLICK THIS BUTTON TO ALLOW LOCATION SERVICES */}
      <ButtonM name="Confirm" click={confirm} />
    </SafeAreaView>
  );
};

export default AddLogo;
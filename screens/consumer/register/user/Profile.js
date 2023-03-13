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
import ImageUpload from '../../../../components/common/ImageUpload';
import {fetchProtected, fetchUnprotected, checkConsumerStatusAndNavigate} from '../../../../hooks/webRequestHelper';
// import ImgToBase64 from 'react-native-image-base64';
// import {RNFS} from 'react-native-fs';
import * as FileSystem from 'expo-file-system';

 


const Profile = (props) => {
  const [firstName, setFirstName] = useState("Poop")
  const [lastName, setLastName] = useState("ff")
  const [photo, setPhoto] = useState('https://m.media-amazon.com/images/I/41cUjUBqpxL._AC_.jpg')
  const [errorText, setErrorText] = useState("");
  const [description, setDescription] = useState("");


  // const readFile = async(file) => {
  //  return RNFS.readFile(file, 'base64')
  // }

  const setInitialDetail = () => {
    fetchProtected('/user/get/complete-info', 'GET', null, setErrorText, (response) => {
      // console.log("first response", response)
      setFirstName(response.user.personalInformation.firstName);
      setLastName(response.user.personalInformation.lastName);

      fetchUnprotected(`/get/image-url/${response.user.profilePicture.name}`, 'GET', null, setErrorText, (response) => {
        // console.log("photo response", response)
        setPhoto(response.url);
      }, false)

    }, props.navigation);
  }

  setInitialDetail();

  const confirm = async () => {

    setErrorText('')

    fetchProtected('/user/set/description', 'POST', {description}, setErrorText, (response) => {
      fetchProtected('/user/check-complete', 'GET', null, setErrorText, (response) => {
        checkConsumerStatusAndNavigate(props.navigation)
      }, props.navigation);
    }, props.navigation);

  
    // fetchProtected('/user/set/profile-picture', 'POST', 
    // formData
    // , setErrorText, 
    // () => console.log("ppoop"), props.navigation, false, type)
  }


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold'}}>Finalize your Profile</Text>
      <Text style={{fontSize:moderateScale(18), paddingVertical:moderateScale(20)}}>Please Select a profile picture</Text>
      <View>
        {/* <Image style={styles.logoImgStyle} source={require('../../../../assets/images/test.jpg')}/>
        <View style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-30), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
          <Icon onPress={clickMe} name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
        </View> */}
        <ImageUpload uploadUrl={'/user/set/profile-picture'} setErrorText={setErrorText} photo={photo} setPhoto={setPhoto}/>
      </View>
      <Text style={{fontSize:moderateScale(20), fontWeight:'bold'}}>{firstName} {lastName}</Text>
      <View style={{paddingTop:40}}/>
      <MLinputM name="Description" placeholder="Talk about yourself and describe your objective." value={description} onChangeValue={setDescription}/>
      <View style={{paddingTop:40}}/>
      <Text style={{paddingTop:20, color:'#c22'}}>{errorText}</Text>
      <ButtonM name="Confirm" click={confirm} />
    </SafeAreaView>
  );
};

export default Profile;
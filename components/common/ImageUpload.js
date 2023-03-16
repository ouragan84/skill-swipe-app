import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import {styles} from '../../constants/styles'
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';
import Icon from 'react-native-vector-icons/Entypo'
import { fetchUnprotected, fetchProtected , uploadFile, getPhoto} from '../../hooks/webRequestHelper'
import { Buffer } from "buffer";



export default function ImageUpload (props) {

  const uploadUrl = props.uploadUrl;

  const [isLocal, setIsLocal] = useState(false);

 const handleChoosePhoto = async () => {

  try{
    props.setErrorText('')

   // No permissions request is necessary for launching the image library
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
     allowsEditing: true,
     base64: true,
     aspect: props.ratio,
     quality: 1
   });

   if (!result.canceled) {

      const hello = result.assets[0].uri.split('.');
      const extension = hello[hello.length - 1].toLowerCase();

      let type = '';

      switch (extension){
        case 'png': type='image/png'; break;
        case 'gif': type='image/gif'; break;
        case 'jpg':
        case 'jpeg': type='image/jpeg'; break;
        default: return props.setErrorText(`please upload a valid image (png/jpeg/gif), given ${extension}`);
      }

      await uploadFile(
        uploadUrl, result.assets[0].uri
        , props.setErrorText, 
        () => console.log("ppoop"), props.navigation, type
      );
      
      setIsLocal(true);
      props.setPhoto(result.assets[0].uri);

      
   }
  }catch(err){
    console.error(err)
    props.setErrorText(err.message)
  }
 };

//   const handleUploadPhoto = () => {
//     //console.log(`${API_URL}/api/upload`)
//     let uid = '123'
//     let url = 'http://localhost:3000' + '/image/api/upload/' + uid
//     fetch(url, {
//       method: 'POST',
//       // headers: {
//       //   'Content-Type': 'multipart/form-data',
//       // },
//       body: createFormData(photo, { userId: '123' }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('response', response);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };

 //<Image style={styles.usrProfileLogoImgStyle} source={require('../assets/images/test.jpg')}/>

 
    const imageSource = {
      uri: isLocal? props.photo: getPhoto(props.photo.name) ,
    };//

    console.log(props.photo, imageSource, isLocal);

    // console.log(imageSource)

  return (
    <View style={{flexDirection:"row", justifyContent:'center', alignContent:'center', width:horizontalScale(360)}}>
        <View>
        <Image style={styles.usrProfileLogoImgStyle} source={imageSource}/>
        <View style={{borderWidth:moderateScale(2), borderColor:'white', top:verticalScale(-30), left:verticalScale(90),backgroundColor:"#28A0BB", width:moderateScale(40), height:moderateScale(40), borderRadius:moderateScale(20)}}>
            <Icon onPress={handleChoosePhoto} name="camera" style={{color:'white',fontSize:moderateScale(20), justifyContent:'center', textAlign:'center', top:verticalScale(7)}}/>
        </View>
        </View>
    </View>    
  );
}
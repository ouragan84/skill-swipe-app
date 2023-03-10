import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import {styles} from '../../constants/styles'
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';
import Icon from 'react-native-vector-icons/Entypo'


export default function ImageUpload (props) {

  const [photo, setPhoto] = React.useState();

//   const createFormData = (photoUri, body = {}) => {
//     const data = new FormData();

//     console.log('HELLO')

//     var imageJSON = {
//       imageName:new Date().getTime()+"_profile.png",
//       avatar:photoUri,

//     }
  
//     data.append('image', JSON.stringify(imageJSON))
//     //data.append('image', JSON.stringify(imageJSON))
//     //data.append('image', Buffer.from(imageJSON.avatar))
  
//     console.log('form data: ', JSON.stringify(imageJSON))
//     //console.log('form data: ', Buffer.from(imageJSON.avatar))

//     return data;
//   };


 const handleChoosePhoto = async () => {
   // No permissions request is necessary for launching the image library
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });

   console.log(result);

   if (!result.canceled) {
      console.log('photo uri: ', result.assets[0].uri)
     setPhoto(result.assets[0].uri);
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

 
    const imageSource = (photo)? { uri: photo } : require('../../assets/images/test.jpg');

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
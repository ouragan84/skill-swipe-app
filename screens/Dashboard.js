

import {React, useState}from 'react';
import { styles} from '../constants/styles';
import Card from '../components/main/Card'
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
import businessProfile from '../data/businessProfiles'

import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-navigation';
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';

import MLinputM from '../components/common/MLinputM';
import NinputM from '../components/common/NinputM';
import InputM from '../components/common/InputM';

import ButtonM from '../components/common/ButtonM';
import ExpItem from '../components/UserProfileMain/ExpItem';
import ImageUpload from '../components/common/ImageUpload';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Confirm from '../components/helper/Confirm';



const Dashboard = (props) => {

  const navigation = useNavigation();

  const goToCompanyProfile = () => {

    navigation.navigate('BusinessProfileSummary', {
      businessInfo: businessProfile
    })

    Keyboard.dismiss()
  }

  const [confirmModalVisible, setConfirmModalVisible] = useState(false)

  const handleDelete = (i) => {
    businessProfile.positions.splice(i,1)
  }

  let businessPositionsComp = []
  let positions = businessProfile.positions
  for (let i = 0; i < positions.length; i++){
    businessPositionsComp.push(
      <View key={i} style={{paddingBottom:15}}>
      <View
        style={{
          height:verticalScale(70), width:horizontalScale(340), backgroundColor:'#f5f5f5',
          borderRadius:moderateScale(18), justifyContent:'center', 
        }}
      >
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{paddingLeft:moderateScale(25), fontSize:moderateScale(16)}}>{positions[i].title}</Text>
        
        <View style={{flexDirection:'row'}}>
        <FontAwesome5 name="trash" onPress={()=>setConfirmModalVisible(!confirmModalVisible)} style={{
          paddingRight:moderateScale(25), fontSize:moderateScale(18)
        }}/>
        <Confirm modalVisible={confirmModalVisible} setModalVisible={setConfirmModalVisible} message="Are you sure you want to do this?" onModalButtonClick={()=>handleDelete(i)}/>

        <EntypoIcon name="chevron-right" onPress={()=>console.log('poop')} style={{
          paddingRight:moderateScale(25), fontSize:moderateScale(20)
        }}/>
        </View>

        </View>
      </View>
      </View>
    )
  }



  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', backgroundColor:'#28A0BB', justifyContent: 'center' }}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center', height:verticalScale(85), width:horizontalScale(320)}}>        
        <Text style={{textAlign:'center',alignSelf:'center', fontSize:moderateScale(20), fontWeight:'bold', color:'white', top:7}}>Dashboard</Text>   
        <View style={{alignSelf:'center',top:5}}>
          <FontAwesome5 name="user-edit" style={{ fontSize: moderateScale(25), color: "white"}} onPress={goToCompanyProfile}/>
        </View>
      </View>
      <ScrollView style={{backgroundColor:'white', width:'100%'}}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{flexDirection:"row",alignItems: 'center', justifyContent: 'center', width:horizontalScale(360), paddingVertical:moderateScale(15), }}>
          <Text style={{fontSize:moderateScale(20), textAlign:'center', fontWeight:'bold'}}>
            Open Positions
          </Text>
        </View>

        {businessPositionsComp}
        
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
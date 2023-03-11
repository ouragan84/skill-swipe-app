import React, { useState } from 'react';
import {Text, SafeAreaView, View, Image, ScrollView} from 'react-native';
import InputM from '../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';
import ButtonM from '../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../components/common/CButtonM';
import LogoImageM from '../../components/common/LogoImageM';
import { styles } from '../../constants/styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import MLinputM from '../../components/common/MLinputM';
import { Button } from 'react-native-paper';

function clickMe(){
  console.log("poopy buttcrack")
}

const Description = ({route}) => {

  const [description, setDescription] = useState(route.params.description);

  return (

    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView keyboardShouldPersistTaps='handled' >
        <View style={{paddingTop:80, paddingBottom: moderateScale(80),  alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{alignItems:'center', fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(20)}}>Description</Text>
        
        <MLinputM name="Description" placeholder="Talk about yourself and describe your objective." defaultValue={description} onChangeValue={setDescription}/>
        <Button onPress={() => route.params.navigation.goBack()}>Go back</Button>    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Description;
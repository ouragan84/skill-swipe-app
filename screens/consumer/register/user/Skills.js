import React, { useState } from 'react';
import {Text, SafeAreaView,StyleSheet,ScrollView, View} from 'react-native';
import InputM from '../../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { Dimensions } from 'react-native';

const { screenWidth, screenHeight } = Dimensions.get('window');


function clickMe(){
  console.log("poopy buttcrack")
}

const Skills = (props) => {

  const [skillCount, setSkillCount] = useState(0)

  const clickMe = () => {
    setSkillCount(skillCount+1)
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold' }}>Add your Skills</Text>
      <View style={{paddingBottom:moderateScale(30)}}/>
      <InputM name="Search" placeholder="Type a skill you have"/>
      <ScrollView style={{width:horizontalScale(320),backgroundColor:"#eeeeee", borderRadius:moderateScale(22),flexGrow:0, height:verticalScale(400)}}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
          <SRButtonM name="Skill 1" click={clickMe} tick={true}/>
        </View>
      </ScrollView>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Confirm" click={() => props.navigation.navigate('Profile')}/>
    
    </SafeAreaView>
  );
};

export default Skills;
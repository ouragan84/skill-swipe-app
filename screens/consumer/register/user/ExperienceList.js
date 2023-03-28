import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import ButtonM from '../../../../components/common/ButtonM';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import NinputM from '../../../../components/common/NinputM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';
import { skillsList } from '../../../../data/skillTags';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';
import SkillsListB from '../../../../components/helper/SkillsListB';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import SeeMore from 'react-native-see-more-inline';

const { width, height } = Dimensions.get('window');


const ExperienceList = (props) => {
  // TODO: Set this experience to the user profile's experience
  let experience = [
    {
      title: "Math Inspector",
      description: "10+ years experience in inspecting Mathes varying in size from 1.2 inches to 8-inch megaladons. Created various sketches of Mathes including one that had a 180 degree curve.",
      months: 131,
      isCurrent: true,
      skills: ["Java", 'Ruby', 'Go'],
    },
    {
      title: "Orgee Coordinator",
      description: "Planned and organized various orgees with disabled people.",
      months: 14,
      isCurrent: false,
      skills: ["HTML", 'C++', 'Cock'],
    },
  ]
  let experienceCards = []
  const monthsToYM = (m) => {
    let mths = m % 12
    let yrs = Math.floor(m / 12)
    return `${yrs} years, ${mths} months`
  }

  if(experience)
    for(let i = 0; i < experience.length; i++){
      let expSkills = ""
      let skills = experience[i].skills
      for (let j = 0; j < skills.length; j++){
        expSkills += skills[j] + (j != skills.length-1?" · ":"")
      }

      experienceCards.push(
        <View key={i} style={{backgroundColor:'#f5f5f5', width:horizontalScale(340), alignSelf:'center', margin:moderateScale(10), borderRadius:moderateScale(18), shadowRadius:10, shadowColor:'black', shadowOpacity:.15, shadowRadius:4, shadowOffset:{width:0, height:2}}}>
          <View style={{marginHorizontal:moderateScale(15), marginVertical: moderateScale(15),}}>
          <Text style={{fontSize:moderateScale(17),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>
            {experience[i].title}
          </Text>
          <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>
            {monthsToYM(experience[i].months)}{experience[i].isCurrent ? " · Present": ""}
          </Text>
          <View style={{paddingBottom:moderateScale(5)}}/>
          <SeeMore linkStyle={{ fontWeight: '500' }} style={{
            fontSize:moderateScale(16),
            color: '#000',
            fontWeight:'default',
            letterSpacing:.3,
          }} numberOfLines={2}>
          {experience[i].description}  
          </SeeMore> 
          <View style={{paddingBottom:moderateScale(5)}}/>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Skills: </Text>
            <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{expSkills}</Text>
          </View>
        </View>
        </View>
      )
    }
  


  return (
  <SafeAreaView style={{backgroundColor:'#28A0BB',alignItems: 'center',}}>
    <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
      <AntDesign onPress={()=>props.navigation.pop()} name="left" style={{width:width/6,textAlign:'center',fontSize:moderateScale(28), color:'white'}}/>
      <Text style={{width:2*width/3,textAlign:'center',fontSize:moderateScale(24), fontWeight:'bold', paddingVertical:moderateScale(10), color:'white'}}>Experience</Text>
      <AntDesign onPress={()=>props.navigation.navigate('Experience', {num:1})} name="pluscircleo" style={{width:width/6,textAlign:'center',fontSize:moderateScale(28), color:'white'}}/>
    </View>
       <ScrollView style={{height:'85%',width:'100%', backgroundColor:'white'}}>
    {experience ? experienceCards : 
      <View>
      <Text style={{textAlign:'center',fontSize:moderateScale(16), paddingVertical:moderateScale(10), color:'black', margin:moderateScale(40), lineHeight:moderateScale(23)}}>If you have any prior experience, please add it to your profile!</Text>
      <View style={{alignItems:'center'}}>
        <ButtonM name="Add Experience" click={()=>props.navigation.navigate('Experience', {num:props.route.params.num})}/>
      </View>
      </View>
    }
    </ScrollView>
    <View style={{width:'100%', backgroundColor:'white',alignItems:'center', paddingTop:moderateScale(10), paddingBottom:moderateScale(30)}}>
      <ButtonM name="Save and Continue" click={()=>props.navigation.navigate('Interests')}/>
    </View>
  </SafeAreaView>
  )
}

export default ExperienceList;
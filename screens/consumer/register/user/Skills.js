import React, { useState } from 'react';
import {Text, SafeAreaView,StyleSheet,ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import InputM from '../../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale} from '../../../../components/helper/Metrics';
import ButtonM from '../../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../../components/common/CButtonM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { Dimensions } from 'react-native';
import { skillsList } from '../../../../data/skillTags';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';
import SkillsListB from '../../../../components/helper/SkillsListB';

const { screenWidth, screenHeight } = Dimensions.get('window');

const Skills = (props) => {

  const [skillCount, setSkillCount] = useState(0)
  const [errorText, setErrorText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([])


  const confirm = () => {
    // setSkillCount(skillCount+1)
    // props.navigation.navigate('Profile');
    // console.log("select", selectedSkills);

    const skills = [];
    selectedSkills.forEach(s => {
      skills.push(skillsList[s]);
    });
    // console.log(skills)
    fetchProtected('/user/set/skill-preferences', 'POST', {
      skills
    }, setErrorText, () => { props.navigation.navigate('Profile') }, props.navigation)
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold' }}>Add skills you want to use</Text>
      <View style={{paddingBottom:moderateScale(30)}}/>
      {/* <InputM name="Search" placeholder="Type a skill you have"/> */}

      <ScrollView style={{width:horizontalScale(300), padding:moderateScale(10), backgroundColor:"#eeeeee"}}>
        <SkillsListB skillsList={skillsList} callback={setSelectedSkills} countCallback={setSkillCount} selected={selectedSkills} isUnlimited={true}/>
      </ScrollView>
      <View style={{paddingBottom:moderateScale(15)}}/>

      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Confirm" click={confirm}/>

      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
     
    </SafeAreaView>
  );
};



const stylez = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});


export default Skills;
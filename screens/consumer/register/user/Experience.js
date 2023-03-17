import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard} from 'react-native';
import ButtonM from '../../../../components/common/ButtonM';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import NinputM from '../../../../components/common/NinputM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';
import { skillsList } from '../../../../data/skillTags';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';
import SkillsListB from '../../../../components/helper/SkillsListB';

const Experience = (props) => {
  // const [num, setNum] = useState("1")
  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)
  const [selectedSkills, setSelectedSkills] = useState([])
  const [errorText, setErrorText] = useState("");
  const [years, setYears] = useState("")
  const [months, setMonths] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isCurrent, setIsCurrent] = useState(false)

  const submitExperience = () => {
    const skills = [];
    selectedSkills.forEach(s => {
      skills.push(skillsList[s]);
    });
    fetchProtected('/user/add/experience', 'POST', {
      years: Number(years), months: Number(months), title, description, isCurrent, skills
    }, setErrorText, () => {
        // currently can have weird behaviour if going backwards. Might want to add logic for that or navigation.reset
        setModalVisible(false)
        setSkillCount(0)
        setSelectedSkills([])
        setErrorText("")
        setYears("")
        setMonths("")
        setTitle("")
        setDescription("")
        setIsCurrent(false)
        props.navigation.navigate('Experience', {num: props.route.params.num + 1}); 
        
    }, props.navigation)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(30)}}>Experience {props.route.params.num}</Text>
      <InputM name="Title" placeholder="Enter job title" onChangeValue={setTitle} value={title}/>
      <MLinputM name="Description" placeholder="Enter your description" onChangeValue={setDescription} value={description}/>
      <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
        <NinputM name="Years" placeholder="00" onChangeValue={setYears} value={years}/>
        <NinputM name="Months" placeholder="00" onChangeValue={setMonths} value={months}/>
      </View>   
      <SRButtonM name="Current" click={() => setIsCurrent(!isCurrent)}/>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={stylez.centeredView}>
          <View style={stylez.modalView}>  
            <ScrollView style={{width:horizontalScale(300), padding:moderateScale(10), backgroundColor:"#eeeeee"}}>
              <SkillsListB skillsList={skillsList} callback={setSelectedSkills} countCallback={setSkillCount} selected={selectedSkills}/>
            </ScrollView>
            <View style={{paddingBottom:moderateScale(15)}}/>
            <ButtonM name={`Done (${skillCount}/5)`}  click={() => {
              // console.log(selectedSkills)
              setSkillCount(selectedSkills.length)
              setModalVisible(!modalVisible)
            }}/>
          </View>
        </View>
      </Modal>


      <View style={{paddingBottom:moderateScale(10)}}/>
      <ButtonM name={`Add Skill Tags (${skillCount}/5)`} click={() => setModalVisible(!modalVisible)}/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <Text onPress={() => props.navigation.navigate('Interests')} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Done adding Experiences</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Add experience +" click={submitExperience}/>

      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}


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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Experience;
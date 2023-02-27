import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import ButtonM from '../../../../components/common/ButtonM';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import NinputM from '../../../../components/common/NinputM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';

const Experience = () => {
  const [num, setNum] = useState("1")
  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)

  const clickMe = () => {
    setSkillCount(skillCount+1)
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(30)}}>Experience {num}</Text>
      <InputM name="Title" placeholder="Enter job title"/>
      <MLinputM name="Description" placeholder="Enter your description"/>
      <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
        <NinputM name="Years" placeholder="00"/>
        <SRButtonM name="Current" width={moderateScale(130)} click={clickMe}/>
      </View>   
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
            <InputM name="Search" placeholder="Type a skill you have"/>
            <ScrollView style={{width:'100%', padding:moderateScale(10), backgroundColor:"#eee", borderRadius:18}}>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
              <SRButtonM name="Skill 1" click={clickMe}/>
            </ScrollView>
            <View style={{paddingBottom:moderateScale(15)}}/>
            <ButtonM name={`Done (${skillCount}/5)`}  click={() => setModalVisible(!modalVisible)}/>
          </View>
        </View>
      </Modal>
      <View style={{paddingBottom:moderateScale(10)}}/>
      <ButtonM name={`Add Skills (${skillCount}/5)`} click={() => setModalVisible(!modalVisible)}/>
      <View style={{paddingBottom:moderateScale(50)}}/>
      <Text onPress={clickMe} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Done adding Experiences</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Add another experience +" click={clickMe}/>
      
    </SafeAreaView>
    
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
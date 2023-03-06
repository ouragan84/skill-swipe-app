import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonM from '../../../../components/common/ButtonM';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import NinputM from '../../../../components/common/NinputM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';

const Position = (props) => {
  const [num, setNum] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)

  const [multiSliderValue, setMultiSliderValue] = React.useState([15, 30]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const [multiSlider2Value, setMultiSlider2Value] = React.useState([15, 30]);
  const multiSlider2ValuesChange = values => setMultiSlider2Value(values);


  const clickMe = () => {
    setSkillCount(skillCount+1)
  }

    // 0 - remote, 1 - hybrid, 2 - inPerson
    const [workType, setWorkType] = useState([false,false,false])
    const [flexib, setFlexib] = useState([false,false,false])
  
    const buttonBorderStyleL = (w) => {
      return {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(15),
        width:horizontalScale(100),
        borderBottomLeftRadius: moderateScale(18),
        borderTopLeftRadius: moderateScale(18),
        elevation: 3,
        backgroundColor: w ? '#28A0BB' : 'white',
        borderWidth:1,
        borderColor: w ? "white" :'#ADAFBB',
      }
    }
    const buttonBorderStyleM = (w) => {
      return{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(15),
        width:horizontalScale(100),
        elevation: 3,
        backgroundColor: w ? '#28A0BB' : 'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: w ? "white" :'#ADAFBB',
      }
    }
    const buttonBorderStyleR = (w) => {
      return{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(15),
        width:horizontalScale(100),
        borderBottomRightRadius: moderateScale(18),
        borderTopRightRadius: moderateScale(18),
        elevation: 3,
        backgroundColor: w ? '#28A0BB' : 'white',
        borderWidth:1,
        borderColor: w ? "white" :'#ADAFBB',
      }
    }
    const buttonTextStyle = (w) => {
      return {
        color: w ? "white" : "black",
        fontSize: moderateScale(16),
        fontWeight: w ?'bold':'default',
        letterSpacing: 0.25,
      }
    }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#edf5f7'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(30)}}>Add Position {num}</Text>
      
      <ScrollView style={{width:'100%',backgroundColor:"white",flexGrow:0, height:verticalScale(480)}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <InputM name="Title" placeholder="Enter job title"/>
      <MLinputM name="Description" placeholder="Enter job description"/>
      
      <View>
      <View style={stylez.sliderOne}>
        <Text style={stylez.text}>Pay Range</Text>
        <Text style={stylez.text}>${multiSliderValue[0]}{multiSliderValue[1]>40 ? "+" : (" - $"+multiSliderValue[1])} per hour</Text>
      </View>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={horizontalScale(300)}
        onValuesChange={multiSliderValuesChange}
        min={10}
        max={45}
        step={5}
        allowOverlap={false}
        snapped
        selectedStyle={{ backgroundColor: '#28A0BB',}}
        unselectedStyle={{ backgroundColor: '#ADAFBB', }}
        trackStyle={{ height: 4, }}
      />
      </View>

      <View>
      <View style={stylez.sliderOne}>
        <Text style={stylez.text}>Hours per week</Text>
        <Text style={stylez.text}>{multiSlider2Value[0]} to {multiSlider2Value[1]} hours</Text>
      </View>
      <MultiSlider
        values={[multiSlider2Value[0], multiSlider2Value[1]]}
        sliderLength={horizontalScale(300)}
        onValuesChange={multiSlider2ValuesChange}
        min={10}
        max={40}
        step={5}
        allowOverlap={false}
        snapped
        selectedStyle={{ backgroundColor: '#28A0BB',}}
        unselectedStyle={{ backgroundColor: '#ADAFBB', }}
        trackStyle={{ height: 4, }}
      />
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
            <ScrollView style={{width:'100%', padding:moderateScale(10), backgroundColor:"#eeeeee", borderRadius:18}}>
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
            </ScrollView>
            <View style={{paddingBottom:moderateScale(15)}}/>
            <ButtonM name={`Done (${skillCount}/5)`}  click={() => setModalVisible(!modalVisible)}/>
          </View>
        </View>
      </Modal>
      <View style={{paddingBottom:moderateScale(10)}}/>
      <ButtonM name={`Add Skill Tags (${skillCount}/5)`} click={() => setModalVisible(!modalVisible)}/>
      
      <View style={{paddingBottom:moderateScale(5)}}/>
      <SRButtonM name="Accept Minors" click={()=>{console.log("a")}} tick={true}/>


      <Text style={{fontSize:moderateScale(15), paddingVertical:moderateScale(10)}}>Select the job type</Text>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>setWorkType([true,false,false])}> 
          <View style={buttonBorderStyleL(workType[0])}>
            <Text style={buttonTextStyle(workType[0])}>Remote</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setWorkType([false,true,false])}>
          <View style={buttonBorderStyleM(workType[1])}>
            <Text style={buttonTextStyle(workType[1])}>Hybrid</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setWorkType([false,false,true])}>
          <View style={buttonBorderStyleR(workType[2])}>
            <Text style={buttonTextStyle(workType[2])}>In Person</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={{paddingBottom:moderateScale(10)}}/>
      <Text style={stylez.text}>How flexible are the position's hours?</Text>
      <View style={{paddingBottom:moderateScale(5)}}/>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[0]
          setFlexib([true,false,false])
        }}> 
          <View style={buttonBorderStyleL(flexib[0])}>
            <Text style={buttonTextStyle(flexib[0])}>Rigid</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[1]
          setFlexib([false,true,false])
        }}> 
          <View style={buttonBorderStyleM(flexib[1])}>
            <Text style={buttonTextStyle(flexib[1])}>Fair</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[2]
          setFlexib([false,false,true])
        }}>             
        <View style={buttonBorderStyleR(flexib[2])}>
            <Text style={buttonTextStyle(flexib[2])}>Free</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{paddingBottom:moderateScale(40)}}/>

      </View>
      </ScrollView>

      <View style={{paddingBottom:moderateScale(40)}}/>
      <Text onPress={() => props.navigation.navigate('TestScreen')} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Done adding positions</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Add another position +" click={()=>{setNum(num+1)}}/>        

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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: moderateScale(20),
    width: horizontalScale(300),
    justifyContent:'center',
    alignContent:'center'
  },
  text: {
    alignSelf: 'center',
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(5)  ,
    fontSize:moderateScale(15)
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});


export default Position;
import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../components/helper/Metrics';
import { styles } from '../../../../../constants/styles';
import Icon from 'react-native-vector-icons/Entypo';

export default function ButtonM(props) {
    let skillsList = props.skillsList
    let selectedSkills = props.selectedSkills
    let setSelectedSkills = props.callbackSelectedSkills
    let setSkillCount = props.callbackSkillCount
    let setSkillPriorities = props.callbackSkillPri
    let item = props.item
    let i = props.i
    const [state, setState] = useState([false,false,false])

    const miniButtonBorderStyleL = (w) => {
        return {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: moderateScale(12),
          width:horizontalScale(90),
          borderBottomLeftRadius: moderateScale(18),
          borderTopLeftRadius: moderateScale(18),
          elevation: 3,
          backgroundColor: w ? '#28A0BB' : 'white',
          borderWidth:1,
          borderColor: w ? "white" :'#ADAFBB',
        }
    }
    const miniButtonBorderStyleM = (w) => {
    return{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(12),
        width:horizontalScale(90),
        elevation: 3,
        backgroundColor: w ? '#28A0BB' : 'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: w ? "white" :'#ADAFBB',
    }
    }
    const miniButtonBorderStyleR = (w) => {
    return{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(12),
        width:horizontalScale(90),
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
    <View key={i} style={{width:horizontalScale(300), backgroundColor:"#eeeeee", borderRadius:moderateScale(18), paddingVertical:moderateScale(10), paddingHorizontal:moderateScale(15), marginBottom:moderateScale(10)}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={stylez.textS}>{skillsList[selectedSkills[i]]}</Text>
        <Icon onPress={()=>{
          let s = [...selectedSkills];
          s = s.filter(a => a !== selectedSkills[i])
          setSkillCount(s.length)
          setSelectedSkills(s)
        }} name="cross" style={{alignSelf:'center', fontSize:moderateScale(20)}}/>
        </View>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>{
            setState([true,false,false])
            setSkillPriorities([skillsList[item], "Low"], i)
        }}> 
          <View style={miniButtonBorderStyleL(state[0])}>
            <Text style={buttonTextStyle(state[0])}>Low</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
            setState([false,true,false])
            setSkillPriorities([skillsList[item], "Medium"], i)
        }}>
          <View style={miniButtonBorderStyleM(state[1])}>
            <Text style={buttonTextStyle(state[1])}>Medium</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
            setState([false,false,true])
            setSkillPriorities([skillsList[item], "High"], i)
        }}>
          <View style={miniButtonBorderStyleR(state[2])}>
            <Text style={buttonTextStyle(state[2])}>High</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
    </View>  
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
      paddingBottom: moderateScale(5),
      fontSize:moderateScale(15)
    },
    textS: {
      alignSelf: 'center',
      paddingTop: moderateScale(5),
      paddingBottom: moderateScale(5),
      fontSize:moderateScale(15),
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent:'center'
    },
  });
  


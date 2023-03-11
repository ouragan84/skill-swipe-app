import React, { useState } from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { horizontalScale, moderateScale } from '../../../../../components/helper/Metrics';

export default function ButtonM(props) {
    let setSelected = props.callback
    let setCount = props.countCallback

    let skillsList=props.skillsList
    const [selected,setSelect] = useState(props.selected)
    const handlePress = (index, isSelected) => {
        let existingState = [...selected];
        if(existingState.includes(index)){
            existingState = existingState.filter(i => i !== index)
            setSelect(existingState)
        } else {
            existingState.push(index)
            setSelect(existingState)
        }
    }

    const renderItem = (item,index) => {
        const isSelected = selected.includes(index)
        const canSelect = selected.length <= 5-1
        return(
            <TouchableWithoutFeedback key={index} style={{
                paddingTop: moderateScale(15),
                paddingBottom: moderateScale(15),
                alignSelf: 'center',
                backgroundColor: isSelected ? "#28A0BB" : "white",
                width:moderateScale(250),
                marginBottom:moderateScale(10),
                borderRadius:moderateScale(18)
            }}
            onPress={()=>{
                if(canSelect || isSelected) {
                    handlePress(index, isSelected)
                    let arr = selected.splice(0)
                    if(!arr.includes(index)) 
                      arr.push(index)
                    else
                      arr = arr.filter(i => i !== index)
                    console.log(arr)
                    setSelected(arr)
                    setCount(arr.length)
                }
            }}
            >
                <Text style={{
                    textAlign: 'center',
                    fontSize:moderateScale(15),
                    color: isSelected ? "white": "black",
                    fontWeight: isSelected ? "bold": "default",
                }}>
                    {item}
                </Text>
            </TouchableWithoutFeedback>

        )
    }

    return (
        <SafeAreaView>
            {skillsList.map((item,index) => {
                return renderItem(item,index)
            })}
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
      fontSize:moderateScale(15)
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent:'center'
    },
  });
  
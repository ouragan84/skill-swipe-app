import React, { useState } from 'react';
import {Text, TouchableOpacity, StyleSheet, Modal, View} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {styles} from '../../constants/styles';
import ButtonM from '../common/ButtonM';
import { horizontalScale, moderateScale } from './Metrics';

export default function Confirm(props) {
    return (
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
                }}>
                <View style={stylez.centeredView}>
                <View style={stylez.modalView}>  
                    <Text style={stylez.text}>{props.message}</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
                      <TouchableOpacity onPress={()=>{props.setModalVisible(!props.modalVisible);}} style={stylez.cancelButton}>
                        <Text style={stylez.cancelButtonTextStyle}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        props.onModalButtonClick()
                        props.setModalVisible(!props.modalVisible);
                      }} style={stylez.modalButton}>
                        <Text style={stylez.modalButtonTextStyle}>
                          Confirm
                        </Text>
                      </TouchableOpacity>
                    </View>

                </View>
                </View>
            </Modal>
            <View style={{paddingBottom:moderateScale(10)}}/>
            
        </SafeAreaView>
    );
};


const stylez = StyleSheet.create({
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width:horizontalScale(140),
    borderRadius: moderateScale(18),
    elevation: 3,
    backgroundColor: '#28A0BB',
  },
  modalButtonTextStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width:horizontalScale(140),
    borderRadius: moderateScale(18),
    elevation: 3,
    backgroundColor: '#eeeeee',
    borderWidth:1,
    borderColor:'#bbb'
  },
    cancelButtonTextStyle: {
      fontSize: moderateScale(16),
      fontWeight: 'default',
      letterSpacing: 0.25,
      color: '#111',
    },
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
      padding: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:horizontalScale(330)
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
      paddingBottom: moderateScale(20),
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
  
  
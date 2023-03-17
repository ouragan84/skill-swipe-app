import React, { useState } from 'react';
import {Text, TouchableOpacity, StyleSheet, Modal, View, Image} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {moderateScale, horizontalScale, verticalScale} from '../helper/Metrics'
import ButtonM from '../common/ButtonM'
import IconButton from './IconButton'
import SeeMore from 'react-native-see-more-inline';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {getPhoto} from '../../hooks/webRequestHelper';

export default function BusDescription(props) {
    const [modalVisible, setModalVisible] = useState(false);
    // let experienceCards = []
    // let experiences = []
    let pos = props.card;
    let picture = {uri: getPhoto(pos.companyInfo.profilePicture)}


    let preferedSkillsStr = ""

    for(let i = 0; i < pos.positionInfo.skills.length; i++){
      preferedSkillsStr += pos.positionInfo.skills[i] + (i!=pos.positionInfo.skills.length-1 ? " · ": "")
    }

    // const monthsToYM = (m) => {
    //   let mths = m % 12
    //   let yrs = Math.floor(m / 12)
    //   return `${yrs} years, ${mths} months`
    // }

    // if(experiences){
    //   for(let i = 0; i < experiences.length; i++){
    //     expSkills = []
    //     skills = experiences[i].skills
    //     for (let j = 0; j < skills.length; j++){
    //       expSkills.push(
    //         <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{skills[j]} {j != skills.length-1?"·":""} </Text>
    //       )
    //     }

    //     experienceCards.push(
          
    //       <View key={i} style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
    //         <Text style={{fontSize:moderateScale(17),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>
    //           Title
    //         </Text>
    //         <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>
    //           Poop
    //         </Text>
    //         <View style={{paddingBottom:moderateScale(5)}}/>
    //         <SeeMore linkStyle={{ fontWeight: '500' }} style={{
    //           fontSize:moderateScale(16),
    //           color: '#000',
    //           fontWeight:'default',
    //           letterSpacing:.3,
    //         }} numberOfLines={2}>
    //         Shit
    //         </SeeMore> 
    //         <View style={{paddingBottom:moderateScale(5)}}/>
    //         <View style={{flexDirection:'row'}}>
    //           <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Skills: </Text>
    //           {expSkills}
    //         </View>
    //       </View>
    //     )
    //   }
    // }else{
    //   experienceCards.push(
    //     <Text style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>
    //       No Experience
    //     </Text>
    //   )
    // }

    return (
        <SafeAreaView>
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
                  <ScrollView showsVerticalScrollIndicator={false}>  
                  <View style={{paddingBottom:moderateScale(45)}}/>
                  

                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image style={stylez.image} source={picture}/>
                    <View style={{paddingLeft:moderateScale(20), alignContent:'flex-start'}}>
                      <Text style={{
                        fontSize:moderateScale(22),
                        fontWeight:'bold',
                        textAlign:'left'
                      }}>{pos.positionInfo.title}</Text>
                      <Text style={{
                        fontSize:moderateScale(18),
                        color: '#000',
                        fontWeight:'default',
                        alignSelf:'left'
                      }}>{pos.companyInfo.name}</Text> 
                      <Text style={{
                        fontSize:moderateScale(18),
                        color: '#000',
                        fontWeight:'default',
                        alignSelf:'left'
                      }}>{pos.positionInfo.city}, CA</Text> 
                    </View>
    
                  </View>
                  
                  <View style={{paddingBottom:moderateScale(20)}}/>

                  <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
                    <Text style={{
                      fontSize:moderateScale(24),
                      fontWeight:'bold',
                      marginHorizontal:moderateScale(15),
                      marginTop:moderateScale(22),
                      marginBottom:moderateScale(10)
                    }}>Job Description</Text>
                    <View style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
                      <SeeMore linkStyle={{ fontWeight: '500' }} style={{
                        fontSize:moderateScale(16),
                        color: '#000',
                        fontWeight:'default',
                        letterSpacing:.3,
                      }} numberOfLines={4}>
                      {pos.positionInfo.description}
                      </SeeMore> 
                    </View>
                  </View>
                  <View style={{paddingBottom:moderateScale(10)}}/>

                  <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
                    <Text style={{
                      fontSize:moderateScale(24),
                      fontWeight:'bold',
                      marginHorizontal:moderateScale(15),
                      marginTop:moderateScale(22),
                      marginBottom:moderateScale(10)
                    }}>Logistics</Text>
                    <View style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Pay Range: </Text>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{`$${pos.positionInfo.payRange[0]} - $${pos.positionInfo.payRange[1]} per hour`}</Text>
                    <View style={{paddingBottom:moderateScale(5)}}/>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Preferred Skills: </Text>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{preferedSkillsStr}</Text>
                    <View style={{paddingBottom:moderateScale(5)}}/>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Hours commitment (per week): </Text>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{pos.positionInfo.isInPerson ? "In Person" :(pos.positionInfo.isHybrid ? "Hybrid" : "Remote")}</Text>
                    <View style={{paddingBottom:moderateScale(5)}}/>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Branch Size </Text>
                    <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{pos.positionInfo.branchSize} employees</Text>
                    <View style={{paddingBottom:moderateScale(5)}}/>
                    </View>
                  </View>
                  <View style={{paddingBottom:moderateScale(10)}}/>

                  <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
                    <Text style={{
                      fontSize:moderateScale(24),
                      fontWeight:'bold',
                      marginHorizontal:moderateScale(15),
                      marginTop:moderateScale(22),
                      marginBottom:moderateScale(10)
                    }}>Company Information</Text>
                    <View style={{marginHorizontal:moderateScale(15), marginBottom: moderateScale(15),}}>
                      <SeeMore linkStyle={{ fontWeight: '500' }} style={{
                        fontSize:moderateScale(16),
                        color: '#000',
                        fontWeight:'default',
                        letterSpacing:.3,
                      }} numberOfLines={4}>
                      {pos.companyInfo.description}
                      </SeeMore> 
                      <View style={{paddingBottom:moderateScale(5)}}/>

                      <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Industry: </Text>
                      <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{pos.companyInfo.industry}</Text>
                      <View style={{paddingBottom:moderateScale(5)}}/>
                      {
                        pos.positionInfo.branchSize != pos.companyInfo.size ? 
                        
                        <><Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'bold',letterSpacing:.3,}}>Company Size</Text>
                        <Text style={{fontSize:moderateScale(16),color: '#000',fontWeight:'default',letterSpacing:.3,}}>{pos.companyInfo.size} employees</Text></>
                        :
                        <></>
                      }
                      <View style={{paddingBottom:moderateScale(5)}}/>
                    </View>
                  </View>
                  <View style={{paddingBottom:moderateScale(10)}}/>

                  {/* <View style={{width:horizontalScale(330), backgroundColor:'#f5f5f5', borderRadius:moderateScale(18)}}>
                    <Text style={{
                      fontSize:moderateScale(24),
                      fontWeight:'bold',
                      marginHorizontal:moderateScale(15),
                      marginTop:moderateScale(22),
                      marginBottom:moderateScale(10)
                    }}>Experience</Text>
                    {{experienceCards}
                  </View> */}
                  </ScrollView>




                  <View style={{paddingBottom:moderateScale(20)}}/>
                  <IconButton
                  name="arrowdown"
                  onPress={()=>{
                    setModalVisible(!modalVisible)
                    }
                  }
                  color="#444"
                  backgroundColor="#f5f5f5"
                  />
                  
                </View>
                </View>
            </Modal>
            {/* <ButtonM name={props.buttonName} click={() => setModalVisible(!modalVisible)}/> */}
            <IconButton
            name="profile"
            onPress={()=>{
              props.onPress
              setModalVisible(!modalVisible)
              }
            }
            color="white"
            backgroundColor="#3CA3FF"
            />
        </SafeAreaView>
    );
};


const stylez = StyleSheet.create({
  image:{
    height: verticalScale(100),
    width: verticalScale(100),
    borderRadius:moderateScale(18),
    alignSelf:'center'
  },
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
      width:'100%'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      padding: 15,
      alignItems: 'center',
      flex:1,
      justifyContent:'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'100%',//horizontalScale(350)
      height:'100%'
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
  
  
import React, { useEffect } from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics'
const Card = ({ card, isTypeUser }) => {

  let displayInfo = {} 

  // BUSINESSES SEE USER INFO
  if(!isTypeUser)
  {
      displayInfo= {
        "title": card.name,
        "location": card.city + ", " + card.state,
        "skills": card.experiences ? card.experiences[0].title : card.description.substr(0,23)+"...",
        "supportInfo": "Last Experience: " + card.lastExperience
      }
  }

  // USERS SEE BUSINESS INFO
  else {
    // - Job Type: IP, Hybrid, Remote
    // - City, ST
    // - hours per week
    // - Branch Size
    // - skills -> format = Preferred Skills: X, Y, Z

      let skills = 'Preferred Skills: '

      for(let i=0;i<card.positionInfo.skills.length; i++)
      {
        if(i!=0)
        {
          skills += ', '
        }
        skills += card.positionInfo.skills[i]
      }

     displayInfo = {
      "title": card.positionInfo.title,
      "location": card.positionInfo.city,
      "skills": skills,
      "supportInfo": "$ " + card.positionInfo.payRange[0] + '-' + card.positionInfo.payRange[1] + "/hr, " + card.positionInfo.hoursPerWeek[0] + '-' + card.positionInfo.hoursPerWeek[1] + " hrs/week"
     }
  }

  return (
    <View
    activeOpacity={1}
    style={styles.card}
  >
    {/* <Text style={styles.text}>
        {`${card.name}, ${card.lastExperience}`}
      </Text> */}
    {/* <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.experiences[0].title}`}
      </Text>
    </View> */}
      <Image style={stylez.image} source={card.photo}/>
      <View style={{paddingBottom:moderateScale(250)}}/>
      <Text style={{
        fontSize:moderateScale(24),
        fontWeight:'bold',
        textAlign:'center'
      }}>{displayInfo.title}</Text>
      <Text style={{
        fontSize:moderateScale(16),
        fontWeight:'default',
        textAlign:'center'
      }}>{displayInfo.location}</Text>
      <Text style={{
        fontSize:moderateScale(16),
        fontWeight:'default',
        textAlign:'center',
        width:horizontalScale(320)
      }}>{displayInfo.skills}</Text>
      <Text style={{
        fontSize:moderateScale(16),
        fontWeight:'default',
        textAlign:'center',
        width:horizontalScale(320)
      }}>{displayInfo.supportInfo}</Text>
  </View>
  )
}

Card.propTypes = { 
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
}


const stylez = StyleSheet.create({
  image:{
    position:'absolute',
    top:verticalScale(-10),
    height: verticalScale(280),
    width: '100%',
    borderTopLeftRadius:moderateScale(18),
    borderTopRightRadius:moderateScale(18)
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
  
  
export default Card
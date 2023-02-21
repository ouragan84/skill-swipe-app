import {StyleSheet} from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';


export const styles = StyleSheet.create({
    buttonBorderStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(20),
        width:horizontalScale(300),
        borderRadius: moderateScale(18),
        elevation: 3,
        backgroundColor: '#28A0BB',
      },
    buttonTextStyle: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

  imgStyle: {
    borderRadius: moderateScale(15),
    height: verticalScale(360),
    width: horizontalScale(230),
    marginBottom: moderateScale(30),
    marginTop: moderateScale(30),
  },

  textOB2style: {
    textAlign: 'center',
    fontSize: moderateScale(15), 
    width:horizontalScale(300)
  },

  textOB1style: {
    color: '#28A0BB', 
    fontSize: moderateScale(30), 
    fontWeight: 'bold',
    marginBottom:moderateScale(15)
  },

  inputBoxStyle: {
      paddingVertical: moderateScale(20),
      width:horizontalScale(300),
      borderRadius: moderateScale(18),
      margin: moderateScale(12),
      borderWidth: 1,
      borderColor: "#ADAFBB",
      padding: horizontalScale(15),
      fontSize: 16
  },
  inputTextStyle: {
      paddingHorizontal:5,
      backgroundColor:'white',
      position: 'absolute',
      color: '#888',
      top:4,
      left:45,
  },

  TDviewStyle: {
      marginTop:moderateScale(0),
      marginBottom:moderateScale(15),
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
  },
});


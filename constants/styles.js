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

    buttonStyleFree: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(12),
        width:horizontalScale(250),
        borderRadius: moderateScale(25),
        elevation: 3,
        backgroundColor: '#28A0BB',
      },
    buttonTextStyleFree: {
        fontSize: moderateScale(32),
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
    buttonStyleCheckout: {
        alignItems: 'right',
        justifyContent: 'right',
        paddingVertical: moderateScale(10),
        width:horizontalScale(300),
        borderRadius: moderateScale(9),
        elevation: 3,
        backgroundColor: '#2D8CFF',
      },
    buttonTextCheckout: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        letterSpacing: 0.18,
        color: 'white',
      },
      
    buttonStyleFinish: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(18),
        width:horizontalScale(280),
        borderRadius: moderateScale(16),
        elevation: 2,
        backgroundColor: '#53C979',
      },
    
    buttonTextFinish: {
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        letterSpacing: 0.50,
        color: 'white',
      },
    buttonStyleStart: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(10),
        width:horizontalScale(320),
        borderRadius: moderateScale(16),
        elevation: 3,
        backgroundColor: '#E0488B',
      },
    buttonTextStart: {
        fontSize: moderateScale(125),
        fontWeight: 'bold',
        letterSpacing: 0.15,
        color: 'white',
      },
    buttonStyleEnroll: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(20),
        width:horizontalScale(300),
        borderRadius: moderateScale(18),
        elevation: 3,
        backgroundColor: '#FEB12C',
      },
    buttonTextEnroll: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    buttonStyleMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(22),
        width:horizontalScale(400),
        borderRadius: moderateScale(10),
        elevation: 3,
        backgroundColor: '#795548',
        },
    
    buttonTextMessage: {
        fontSize: moderateScale(10),
        fontWeight: 'italic',
        letterSpacing: 0.25,
        color: 'white',
        },
    buttonStyleExp: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(30),
        width:horizontalScale(150),
        borderRadius: moderateScale(5),
        elevation: 3,
        backgroundColor: '#F44336',
        },
    buttonTextExp: {
        fontSize: moderateScale(10),
        fontWeight: 'bold',
        letterSpacing: 0.50,
        color: 'white',
        },
    buttonStyleRefrence: {
        alignItems: 'center',
        justifyContent: 'right',
        paddingVertical: moderateScale(10),
        width:horizontalScale(100),
        borderRadius: moderateScale(14),
        elevation: 3,
        backgroundColor: '#009688',
      },
    buttonTextRefrence: {
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        letterSpacing: 0.50,
        color: 'white',
      },

  imgStyle: {
    borderRadius: moderateScale(15),
    height: verticalScale(360),
    width: horizontalScale(250),
    marginBottom: moderateScale(30),
    marginTop: moderateScale(30),
  },

  profImgStyle: {
    borderRadius: moderateScale(15),
    height: verticalScale(360),
    width: horizontalScale(250),
    marginBottom: moderateScale(30),
    marginTop: moderateScale(30),
  },

  logoImgStyle: {
    borderRadius: moderateScale(25),
    height: verticalScale(120),
    width: horizontalScale(120),
    marginTop: moderateScale(30),
  },
  companyLogoImgStyle:{
    borderRadius: moderateScale(25),
    height: verticalScale(200),
    width: horizontalScale(200),
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
  inputBigBoxStyle: {
    width:horizontalScale(300),
    height:verticalScale(130),
    borderRadius: moderateScale(18),
    margin: moderateScale(10),
    borderWidth: 1,
    borderColor: "#ADAFBB",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
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


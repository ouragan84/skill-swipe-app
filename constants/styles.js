import {StyleSheet, Dimensions} from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

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

  // SCREEN - PROFILE
	containerProfile: { marginHorizontal: 0 },
	containerCardItem: {
		marginTop: 0,
	},
	topIcons: {
		flex: 1, 
		flexDirection: 'row',
		marginTop: 100
	},
	topIconLeft: {
		paddingLeft: 20,
		marginTop: 50,
		marginBottom: -50,
	},
	topIconRight: {
		fontSize: 20,
		paddingRight: 20,
		textAlign: 'right'
	},
	photo: {
		width: DIMENSION_WIDTH,
		height: 450,
		marginTop: 0
	},
	
	
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	textButton: {
		fontSize: 15,
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: PRIMARY_COLOR,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: SECONDARY_COLOR,
		paddingHorizontal: 20,
	},

	// SCREEN - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
	icon: {
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: 10
	},

  // SCREEN - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},

  // COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: DIMENSION_WIDTH - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: GRAY,
		fontSize: 12,
		paddingTop: 5
	},

  // SCREEN - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

  // SCREEN - MATCHES
	containerLikes: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

});


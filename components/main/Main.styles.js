import { StyleSheet, Dimensions } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics'

const { height } = Dimensions.get('window')

export const mainStyles = StyleSheet.create({
  mainContainer: {flex:1, alignItems: 'center', paddingTop:moderateScale(50)},
  swiperContainer: {
    width: horizontalScale(375),
    height: verticalScale(375),
    backgroundColor:"black",
    marginBottom: moderateScale(150)
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width:horizontalScale(230)
  },

  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
})
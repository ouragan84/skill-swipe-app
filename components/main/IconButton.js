import React from 'react'
import { TouchableOpacity } from 'react-native'
import { func, string } from 'prop-types'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './IconButton.styles'
import { colors } from '../../constants/colors'
const IconButton = ({ onPress, name, backgroundColor, color }) => (
  <TouchableOpacity
    style={[styles.singleButton, { backgroundColor }]}
    onPress={onPress}
    activeOpacity={0.85}
  >
    <Icon
      name={name}
      size={20}
      color={color}
    />
  </TouchableOpacity>
)
IconButton.defaultProps = {
  color: colors.white,
  backgroundColor: colors.heartColor,
}
IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
}
export default IconButton

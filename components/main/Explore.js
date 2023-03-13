import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import userProfiles from '../../data/userProfiles'
import Card from './Card'
import IconButton from './IconButton'
import OverlayLabel from './Overlaylabel'
import Main from './Main'

const Explore = (props) => {
  return (
    <View>
        <Main {...props}/>
        <Text>
           yo 
        </Text>

    </View>
  )
}


export default Explore
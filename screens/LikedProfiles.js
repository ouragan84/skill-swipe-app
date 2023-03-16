import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
//import MainSwiper from './MainSwiper'
import Swiper from 'react-native-deck-swiper'
//import userProfiles from '../../data/userProfiles'
import Card from '../components/main/Card'
import IconButton from '../components/main/IconButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OverlayLabel from '../components/main/Overlaylabel'
import {mainStyles} from '../components/main/Main.styles'
import { styles} from '../constants/styles';
import { SafeAreaView } from 'react-navigation'
import MainDescription from '../components/main/MainDescription'

const LikedProfiles = ({route}) => {

    console.log('liked profiles', route.params.userProfiles)

  const useSwiper = useRef()

  const [cardIndex, setCardIndex] = React.useState(0);
  const [swipeStates, setSwipeStates] = React.useState({});

  let tempStates = {
    up: false,
    down: false,
    left: false,
    right: false
  }

  const handleOnSwipedTop = (cardIndex) => {

    console.log('card index: ', cardIndex)
    
    if(!tempStates.up)
    {
      console.log('oop')
      //setSwipeState(true)
      tempStates = {
        up: true,
        down: false,
        left: false,
        right: false
      }
    }

    setSwipeStates(tempStates)
  }  


const handleOnSwipedLeft = (index) => {
  if(!tempStates.left)
  {
    console.log('looft')
    //setSwipeState(false)
    tempStates = {
      up: false,
      down: false,
      left: true,
      right: false
    }
    console.log('card index rejected: ', index)

  //to the next card
  setCardIndex(index+1)
  setSwipeStates(tempStates)
  }
  
}

// Icon click handle
const handleRejectIconClick = () => {

  if(!tempStates.left)
  {
    console.log('left')
  //setSwipeState(false)
    tempStates = {
      up: false,
      down: false,
      left: true,
      right: false
    }
    
    useSwiper.current.swipeLeft()

    console.log('card index rejected: ', cardIndex)

    //to the next card
    setCardIndex(cardIndex+1)
    setSwipeStates(tempStates)
  }
  
}
const handleDescIconClick = () => {
  if(!tempStates.up)
  {
    console.log('up')
    

    tempStates = {
      up: true,
      down: false,
      left: false,
      right: false
    }

    console.log('desc for card index: ', cardIndex, ', name: ', route.params.userProfiles[cardIndex].name)
  setSwipeStates(tempStates) 
  }
  
}
const handleLikeIconClick = () => {

  if(!tempStates.right)
  {
    console.log('right')
    //setSwipeState(false)

    tempStates = {
      up: false,
      down: false,
      left: false,
      right: true
    }
    useSwiper.current.swipeRight()

    console.log('card index liked: ', cardIndex)

  //to the next card
  setCardIndex(cardIndex+1)
  setSwipeStates(tempStates)
  } 
  
   
}

const goToPrevProfile = () => {
    //route.params.navigation.goBack(null)
    route.params.navigation.navigate('Likes', {
        navigation: route.params.navigation
    })
}

  const allButtons = (
    <View style={mainStyles.buttonsContainer}>
      <IconButton
        name="close"
        onPress={() => handleRejectIconClick()}
        color="white"
        backgroundColor="#E5566D"
      />
      <IconButton
        name="profile"
        onPress={() => handleDescIconClick()}
        color="white"
        backgroundColor="#3CA3FF"
      />
      <IconButton
        name="message1"
        onPress={() => handleLikeIconClick()}
        color="white"
        backgroundColor="#4CCC93"
      />
    </View>
  )

  const likeRejectButtons = (
    <View style={mainStyles.buttonsContainer}>
      <IconButton
        name="close"
        onPress={() => handleRejectIconClick()}
        color="white"
        backgroundColor="#E5566D"
      />
      <IconButton
        name="message1"
        onPress={() => handleLikeIconClick()}
        color="white"
        backgroundColor="#4CCC93"
      />
    </View>
  )

    console.log('up staes is on: ', swipeStates.up)

  

return (
  <View
    style={mainStyles.mainContainer}
  >
    {/* Z index for back button */}
    <TouchableOpacity onPress={goToPrevProfile} style={{zIndex: 1}}>
        <Text style={styles.topIconLeft}>
        <Ionicons name="chevron-back-circle" size="40"/>
        </Text>
    </TouchableOpacity> 
    <View style={mainStyles.swiperContainer}>
      <Swiper
        ref={useSwiper}
        //onSwipedTop={(index) => handleOnSwipedTop(index)}
        disableBottomSwipe={true}
        disableTopSwipe={true}
        disableRightSwipe={true}
        onSwipedLeft={(index) => handleOnSwipedLeft(index)}
        animateCardOpacity
        containerStyle={mainStyles.container}
        cards={route.params.userProfiles}
        renderCard={card => <Card card={card} />}
        cardIndex={cardIndex}
        backgroundColor="white"
        stackSize={2}
        infinite
        showSecondCard
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <OverlayLabel label="NOPE" color="#E5566D" />,
            style: {
              wrapper: mainStyles.overlayWrapper,
            },
          },
        }}
      />
    </View>
    {!swipeStates.up? allButtons: likeRejectButtons}
    {swipeStates.up? <MainDescription info={route.params.userProfiles[cardIndex]}/> : <Text></Text>}
  </View>
)}

export default LikedProfiles
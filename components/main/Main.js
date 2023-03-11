import React, { useRef, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
//import MainSwiper from './MainSwiper'
import Swiper from 'react-native-deck-swiper'
import userProfiles from '../../data/userProfiles'
import Card from './Card'
import IconButton from './IconButton'
import OverlayLabel from './Overlaylabel'
import {mainStyles} from './Main.styles'
import { SafeAreaView } from 'react-navigation'
import MainDescription from './MainDescription'
import { moderateScale } from '../helper/Metrics'

const Main = (props) => {

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

const handleOnSwipedRight = (index ) => {
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
    console.log('card index liked: ', index)

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

    console.log('desc for card index: ', cardIndex, ', name: ', userProfiles[cardIndex].name)
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

  const allButtons = (
    <View style={mainStyles.buttonsContainer}>
      <IconButton
        name="close"
        onPress={() => handleRejectIconClick()}
        color="white"
        backgroundColor="#E5566D"
      />
      <MainDescription 
        onPress={() => handleDescIconClick()} 
        info={userProfiles[cardIndex]} 
        onModalButtonClick={()=>{}}
      />
      <IconButton
        name="heart"
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
    <View style={mainStyles.swiperContainer}>
      <Swiper
        ref={useSwiper}
        //onSwipedTop={(index) => handleOnSwipedTop(index)}
        disableBottomSwipe={true}
        disableTopSwipe={true}
        onSwipedLeft={(index) => handleOnSwipedLeft(index)}
        onSwipedRight={(index) => handleOnSwipedRight(index)}
        animateCardOpacity
        containerStyle={mainStyles.container}
        cards={userProfiles}
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
          right: {
            title: 'LIKE',
            element: <OverlayLabel label="LIKE" color="#4CCC93" />,
            style: {
              wrapper: {
                ...mainStyles.overlayWrapper,
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}
      />
    </View>
    {allButtons}
    {/* {!swipeStates.up? allButtons: likeRejectButtons}
    {swipeStates.up? <MainDescription onModalButtonClick={()=>{}} info={userProfiles[cardIndex]}/> : <Text></Text>} */}
    
  </View>
)}

export default Main
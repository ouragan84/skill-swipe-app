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


const handleOnSwipedLeft = () => {
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
  }

  setSwipeStates(tempStates)
}

const handleOnSwipedRight = () => {
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
  }
  setSwipeStates(tempStates)
}

// const handleOnSwipedBottom = () => {
//   console.log('down')
//   setSwipeState(false)
// }


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
  }
  setSwipeStates(tempStates)
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
  }
  setSwipeStates(tempStates) 
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
  }   
  setSwipeStates(tempStates) 
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
        name="heart"
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
        onSwipedLeft={handleOnSwipedLeft}
        onSwipedRight={handleOnSwipedRight}
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
          top: {
            title: 'INFO',
            element: <OverlayLabel label="INFO" color="#ffffff" />,
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
    {!swipeStates.up? allButtons: likeRejectButtons}
    {swipeStates.up? <MainDescription/> : <Text>Nothing</Text>}
  </View>
)}

export default Main
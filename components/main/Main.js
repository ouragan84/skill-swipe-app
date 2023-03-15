import React, { useRef, useState, useEffect, useDeferredValue } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
//import MainSwiper from './MainSwiper'
import Swiper from 'react-native-deck-swiper'
//import userProfiles from '../../data/userProfiles'
import businessProfiles from '../../data/businessProfiles'
import Card from './Card'
import IconButton from './IconButton'
import OverlayLabel from './Overlaylabel'
import {mainStyles} from './Main.styles'
import { SafeAreaView } from 'react-navigation'
import MainDescription from './MainDescription'
import { moderateScale } from '../helper/Metrics'
import { useNavigation } from '@react-navigation/native';

import {socket, fetchProtected, fetchUnrotected} from '../../hooks/webRequestHelper'

import { colors } from '../../constants/colors'

const { height } = Dimensions.get('screen')

const { width } = Dimensions.get('screen')

const Main = (props) => {

  const useSwiper = useRef()
  const navigation = useNavigation();

  //const [cardIndex, setCardIndex] = React.useState(0);
  const [swipeStates, setSwipeStates] = React.useState({});
  
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    updateCards();
  }, [])

  const updateCards = async () => {
    if(cardList.length > 5)
      return;
    fetchProtected('/main/user/get/cards', 'GET', null, (response) => {console.error(response)}, (response) => {
      let newCards = response.cards;
      let updatedCards = cardList.splice(0);
      for(let i = 0; i < newCards.length; i++){
        if(newCards[i] == null)
          continue;
        for(let j = 0; j < cardList.length; j++)
          if(newCards[i]._id == cardList[j]._id)
            continue;
        
        updatedCards.push(newCards[i]);
      }
      
      console.log('here buithc')
      console.log(updatedCards)
      setCardList(updatedCards);
    }, props.navigation);
  }

  // console.log('IN MAIN ISTYPE USER:', props.isTypeUser)

  // let tempStates = {
  //   up: false,
  //   down: false,
  //   left: false,
  //   right: false
  // }

  const rejectCurrentCard = () => {
    let cardListCopy = cardList.slice(0);
    const rejected = cardListCopy[0]
    cardListCopy.splice(0, 1);
    if(rejected)
      console.log(`Reject: ${rejected.positionInfo.title}`)
    setCardList(cardListCopy);
  }

  const acceptCurrentCard = () => {
    let cardListCopy = cardList.slice(0);
    const rejected = cardListCopy[0]
    cardListCopy.splice(0, 1);
    if(rejected)
      console.log(`Liked: ${rejected.positionInfo.title}`)
    setCardList(cardListCopy);
  }

  // const handleOnSwipedTop = (cardIndex) => {

  //   console.log('card index: ', cardIndex)
    
  //   if(!tempStates.up)
  //   {
  //     console.log('oop')
  //     //setSwipeState(true)
  //     tempStates = {
  //       up: true,
  //       down: false,
  //       left: false,
  //       right: false
  //     }
  //   }

  //   setSwipeStates(tempStates)
  // }  


const handleOnSwipedLeft = (index) => {
  rejectCurrentCard();

  // if(!tempStates.left)
  // {
    
    // console.log('looft')
    //setSwipeState(false)
    // tempStates = {
    //   up: false,
    //   down: false,
    //   left: true,
    //   right: false
    // }
    // // console.log('card index rejected: ', index)

  //to the next card
  //setCardIndex(index+1)
    // setSwipeStates(tempStates)
  // }
  
}

const handleOnSwipedRight = (index ) => {
  acceptCurrentCard();
  // if(!tempStates.right)
  // {
    
  //   // console.log('right')
  //   // setSwipeState(false)
  //   // tempStates = {
  //   //   up: false,
  //   //   down: false,
  //   //   left: false,
  //   //   right: true
  //   // }
  //   // console.log('card index liked: ', index)

  // //to the next card
  // //setCardIndex(index+1)
  // // setSwipeStates(tempStates)
  // }
  
}

// Icon click handle
const handleRejectIconClick = () => {

  rejectCurrentCard();
  useSwiper.current.swipeLeft()
  // if(!tempStates.left)
  // {
    
  //   console.log('left')
  //setSwipeState(false)
    // tempStates = {
    //   up: false,
    //   down: false,
    //   left: true,
    //   right: false
    // }
    
    // useSwiper.current.swipeLeft()

    // console.log('card index rejected: ', cardIndex)

    //to the next card
    //setCardIndex(cardIndex+1)
    // setSwipeStates(tempStates)
  // }
  
}
const handleDescIconClick = () => {
  // if(!tempStates.up)
  // {

  //   console.log('up')
  
    // tempStates = {
    //   up: true,
    //   down: false,
    //   left: false,
    //   right: false
    // }

    // console.log('desc for card index: ', cardIndex, ', name: ', cardList[cardIndex].name)
  // setSwipeStates(tempStates) 
  // }
  
}
const handleLikeIconClick = () => {

  // if(!tempStates.right)
  // {
    acceptCurrentCard();
    // console.log('right')
    //setSwipeState(false)

    // tempStates = {
    //   up: false,
    //   down: false,
    //   left: false,
    //   right: true
    // }
    useSwiper.current.swipeRight()

    // console.log('card index liked: ', cardIndex)

  //to the next card
  //setCardIndex(cardIndex+1)
  // setSwipeStates(tempStates)
  // } 
  
   
}

const handleAllSwipesDone = () => {
  console.log('All DONE')
}

  let allButtons;

  if(cardList.length > 0)
  {
    allButtons = (
      <View style={mainStyles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={() => handleRejectIconClick()}
          color="white"
          backgroundColor="#E5566D"
        />
        <MainDescription 
          onPress={() => handleDescIconClick()} 
          info={cardList[0]} 
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
  }
  

    // console.log('up staes is on: ', swipeStates.up)


    const noMoreContentCard = (
      <View
        activeOpacity={1}
        style={{
          height: height - 400,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: moderateScale(18),
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 6,
          shadowOpacity: 0.3,
          elevation: 2,
        }}
      >
      {/* <View style={{paddingBottom:moderateScale(250)}}/> */}
      <Text style={{
        fontSize:moderateScale(24),
        fontWeight:'bold',
        textAlign:'center'
      }}>{'No more profiles'}</Text>
      <Image style={{
          height: 20,
          width: '100%',
        }}
        height={100}
        width={100}
        source={{uri: "https://links.papareact.com/6gb"}}
      />
      
    </View>
    )
    

  // useEffect(() => {
  //   if(cardIndex==userProfiles.length)
  //   {
  //     console.log('last card done')
  //   };
   
  // }, []);

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
        cards={cardList}
        renderCard={(card) => card? (
          <Card card={card} isTypeUser={props.isTypeUser}/>
        ): (
          noMoreContentCard
        )}
        
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
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
    
    {allButtons? allButtons: <View></View>}
    {/* {!swipeStates.up? allButtons: likeRejectButtons}
    {swipeStates.up? <MainDescription onModalButtonClick={()=>{}} info={userProfiles[cardIndex]}/> : <Text></Text>} */}
    
  </View>
)}

export default Main


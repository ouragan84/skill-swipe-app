import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import userProfiles from '../../data/userProfiles'
import Card from './Card'
import IconButton from './IconButton'
import OverlayLabel from './Overlaylabel'
import styles from './Main.styles'

const Main = (props) => {
  const useSwiper = useRef()

  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft()
  const handleOnSwipedTop = () => useSwiper.current.swipeTop()
  const handleOnSwipedRight = () => useSwiper.current.swipeRight()

  return (
    <View
      style={styles.container}
    >
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={userProfiles}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
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
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color="#4CCC93" />,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={() => handleOnSwipedLeft()}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={() => handleOnSwipedTop()}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={() => handleOnSwipedRight()}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
      <View style={styles.swipeTextContainer}>
        <Text
          style={styles.copyright}
        >
            All pictures were taken freerly from Unsplash.com.
            Names on the Photos are the names of photographers who took pictures.
        </Text>
      </View>
    </View>
  )
}

export default Main
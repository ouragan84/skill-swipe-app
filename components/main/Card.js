import React, { useEffect } from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'
const Card = ({ card }) => (

  // console.log('CARD', card)

  // useEffect(() => {
  //   // This effect uses the `value` variable,
  //   // so it "depends on" `value`.
  //   console.log(value);
  // }, [value])

  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Text style={styles.text}>
        {`${card.name}, ${card.lastExperience}`}
      </Text>
    <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.lastExperience}`}
      </Text>
    </View>
  </View>
)

Card.propTypes = { 
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
}
export default Card
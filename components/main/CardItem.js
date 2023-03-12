import React from 'react';
import { styles } from '../../constants/styles';

import Profile from '../../screens/Profile';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const CardItem = (props) => {

  console.log('index: ', props.profileIndex, '; item: ', props.profileData)

  const handlePress = () => {
    console.log('CLICKED: ', props.profileData)

    props.navigation.navigate('LikedProfiles', {
      profileData: props.profileData,
      profileIndex: props.profileIndex,
      userProfiles: props.profiles,
      navigation: props.navigation
    })
  }

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.containerCardItem}>
      {/* IMAGE TODO BELOW CHANGE TO URI LATER*/}
      <Text>TEST</Text>


      {/* NAME */}
      <Text style={nameStyle}>{props.profileData.name}</Text>


      {/* STATUS */}
      {props.profileData.status && (
        <View style={styles.status}>
          <View style={props.profileData.status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{props.profileData.status}</Text>
        </View>
      )}


    </View>
    </TouchableOpacity>
    
  );
};

export default CardItem;
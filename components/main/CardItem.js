import React from 'react';
import { styles } from '../../constants/styles';

import Profile from '../../screens/Profile';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const CardItem = (props) => {

  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: props.variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: props.variant ? 170 : 350,
      margin: props.variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: props.variant ? 10 : 15,
      paddingBottom: props.variant ? 5 : 7,
      color: '#363636',
      fontSize: props.variant ? 15 : 30
    }
  ];

  const handlePress = () => {
    console.log('CLICKED: ', props.profileData)

    // let a = {
    //   'description': description,
    //   'photo': image,
    //   'name':name,
    //   'age': '19'}

    // console.log('item: ', a)

    props.navigation.navigate('Profile', {
      profileData: props.profileData})
  }

  const profilePicPath = '../' + props.profileData.image
  //console.log('iMAGE path: ', props.profileData.image)

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.containerCardItem}>
      {/* IMAGE TODO BELOW CHANGE TO URI LATER*/}
      <Image source={require('../../assets/images/logo.png')} style={imageStyle}/>

      {/* MATCHES */}
      {props.profileData.matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" /> {props.profileData.matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{props.profileData.name}</Text>

      {/* DESCRIPTION */}
      {/* {props.profileData.description && (
        <Text style={styles.descriptionCardItem}>{props.profileData.description}</Text>
      )} */}

      {/* STATUS */}
      {props.profileData.status && (
        <View style={styles.status}>
          <View style={props.profileData.status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{props.profileData.status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {props.actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.star}>
              <Icon name="star" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.onPressLeft()}>
            <Text style={styles.like}>
              <Icon name="like" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.onPressRight()}
          >
            <Text style={styles.dislike}>
              <Icon name="dislike" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.flash}>
              <Icon name="flash" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </TouchableOpacity>
    
  );
};

export default CardItem;


import React from 'react';
import { styles} from '../constants/styles';
import Card from '../components/main/Card'

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/main/ProfileItem';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from '../components/main/Icon';
//import userProfiles from '../data/userProfiles'

const Profile = ({route}) => {
  // const {
  //   age,
  //   image,
  //   info1,
  //   info2,
  //   info3,
  //   info4,
  //   location,
  //   match,
  //   name
  // } = userProfiles[7];

  console.log('IN PROFILE: ', route.params.profileData)

  const goToPrevProfile = () => {

  } 

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
      <View style={styles.topIcons}>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={goToPrevProfile}>
              <Text style={styles.topIconLeft}>
                <Ionicons name="chevron-back-circle" size="40"/>
              </Text>
            </TouchableOpacity>       
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={goToPrevProfile}>
            <Text style={styles.topIconRight}>
              <Ionicons name="chevron-forward-circle" size="40"/>
            </Text>
          </TouchableOpacity>       
        </View>
      </View>
        
        <ImageBackground source={require('../assets/images/logo.png')} style={styles.photo} />

        <Text>
          {route.params.profileData.name}, {route.params.profileData.age}
        </Text>

        {/* <Card card={props.profileData}/> */}
        
        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
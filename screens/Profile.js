

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

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={require('../assets/images/logo.png')} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <Icon name="chevronLeft" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Text>
          {}
        </Text>

        {/* <Card card={props.profileData}/> */}
        

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
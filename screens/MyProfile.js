

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
import userProfiles from '../data/userProfiles'

const Profile = (props) => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = userProfiles[7];

  return (
    <Text>
      {'MY PROFILE'}
    </Text>
  );
};

export default Profile;
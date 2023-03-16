import React from 'react';
import { styles} from '../constants/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/main/CardItem';
import Icon from '../components/main/Icon';
import Demo from '../data/messagesData';
import userProfiles from '../data/userProfiles';

const Likes = (props, route) => {

  console.log('DEMO DATA: ', Demo[0])

  let navSource = ''

  if(route && route.params)
  {
    navSource = route.params.navigation
    console.log('route')
  }
    
  else  
  {
    navSource = props.navigation
    console.log('props')
  }
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerLikes}>
        {/* <ScrollView> */}
          <FlatList
            numColumns={2}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                {/* REPLACE BELOW WITH LIKES PROFILES */}
                <CardItem
                  profileData={item}
                  profiles={userProfiles}
                  variant
                  navigation={navSource}
                />
              </TouchableOpacity>
            )}
          />
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  );
};

export default Likes;
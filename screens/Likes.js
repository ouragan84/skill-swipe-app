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

const Likes = (props) => {

  console.log('DEMO DATA: ', Demo[0])

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
            renderItem={({ item }) => (
              <TouchableOpacity>
                <CardItem
                  profileData={item}
                  variant
                  navigation={props.navigation}
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
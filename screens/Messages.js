import React from 'react';
import { styles } from '../constants/styles';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from 'react-native';
import Message from '../components/main/MessageItem';
import Icon from '../components/main/Icon';
import Demo from '../data/messagesData';

const Messages = (props, route) => {
  
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
      <View style={styles.containerMessages}>
        <ScrollView>
          {
            Demo.map((item, index)=> (
        
              <Message
                key={index}
                image={item.image}
                name={item.name}
                lastMessage={item.message}
                navigation={navSource}
              />
            ))
          }
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
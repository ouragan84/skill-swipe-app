

import React from 'react';
import { styles } from '../../constants/styles';

import { Text, View, Image, TouchableOpacity } from 'react-native';

const MessageItem = ({ image, lastMessage, name, index, navigation }) => {

  const handlePress = () => {
    console.log('CLICKED: ', name)
    // })
    navigation.navigate('MessageScreen', {
      navigation: navigation
    })
  }

  return (
    <TouchableOpacity key={index} onPress={handlePress}>
      <View style={styles.containerMessage}>
        <Image source={require("../../assets/images/techjob.png")} style={styles.avatar} />
        <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
      </View>
    </TouchableOpacity>
    
  );
};

export default MessageItem;


import React from 'react';
import { styles } from '../../constants/styles';

import { Text, View, Image } from 'react-native';

const MessageItem = ({ image, lastMessage, name }) => {
  return (
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
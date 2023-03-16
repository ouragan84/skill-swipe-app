

import React, {useState} from 'react';
import { styles } from '../../constants/styles';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics'

import Confirm from '../../components/helper/Confirm.js'

const MessageItem = ({ image, lastMessage, name, index, navigation }) => {

  const [deletePressed, setDeletePressed] = useState(false)

  const [confirmModalVisible, setConfirmModalVisible] = useState(false)

  const handlePress = () => {
    console.log('CLICKED: ', name)
    // })
    navigation.navigate('MessageScreen', {
      navigation: navigation
    })
  }

  const handleDeleteExp = () => {
    console.log('deleted')
    setDeletePressed(true)
  }


  let modalConfirm = (
    <Confirm modalVisible={confirmModalVisible} setModalVisible={setConfirmModalVisible} message="Are you sure you want to do this?" onModalButtonClick={() => {goToMessages}}/>
  )

  const goToMessages = () => {
    navigation.navigate('Messages')
  }

  let messageList = (
    <TouchableOpacity key={index} onPress={handlePress}>
      <View style={styles.containerMessage}>
        <Image source={require("../../assets/images/techjob.png")} style={styles.avatar} />
        <View style={styles.messageContent}>
          <Text>{name}</Text>
          <Text style={styles.message}>{lastMessage}</Text>
        </View>
        <FontAwesome5 name="trash" style={{fontSize: moderateScale(25), color: "#ff0000"}} onPress={handleDeleteExp}/>
      </View>
    </TouchableOpacity>
  )

  return (
    <>
      {deletePressed? modalConfirm : messageList}
    </>
    
    
  );
};

export default MessageItem;
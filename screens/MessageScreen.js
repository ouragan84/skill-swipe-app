import { React, useCallback, useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { styles } from '../constants/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";

import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
  TextInput,
  Button,
  Platform
} from 'react-native';
import Message from '../components/main/MessageItem';
import Demo from '../data/messagesData';
import SenderMessage from '../components/main/SenderMessage';
import ReceiverMessage from '../components/main/ReceiverMessage';
import { moderateScale } from '../components/helper/Metrics';


const MessageScreen = () => {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const width = Dimensions.get("screen").width;

  let justFlipped = false

  const sendMessage = () => {

    if(justFlipped==false)
    {
      console.log('you texted: ', input)

      let a = messages

      a.push(input)

      setMessages(a)
      setInput('')
    }
    else
    {
      justFlipped = false
    }

    
  }  

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={10}
        >
            <View>
              <Text>
                Name
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {/* USE BELOW FLATLIST FOR BACKEND */}
                {/* <FlatList
                    data={messages}
                    renderItem={({item: message}) => (
                        !justFlipped ? (
                          <SenderMessage message={message}/>
                         ) : (
                        <ReceiverMessage message={message}/>
                         )
                        
                        
                    )
                    
                }>
                </FlatList> */}

                {/* THIS FLATLIST IS JUST FOR VIEW PURPOSES */}
                <AutoScrollFlatList
                    data={messages}
                    renderItem={({item: message}) => (
                        <View>
                          <SenderMessage message={message}/>
                          <ReceiverMessage message={message}/>
                        </View>
                        
                    )                                            
                               
                }/>
                

            </TouchableWithoutFeedback>

            <View style={{ 
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 1,
              borderTopColor: '#E5E7EB',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 8,
              paddingBottom: 8
            }}>
                <TextInput 
                    style={{ 
                      height: 40, 
                      fontSize: 18 
                    }}
                    placeholder='Send Message...'
                    onChangeText={setInput}
                    onSubmitEditing={sendMessage}
                    value={input}
                />
                <FontAwesome onPress={sendMessage} style={{fontSize: moderateScale(30), color: "#28a0bb"}} name="arrow-circle-up"/>
                {/* <Button onPress={sendMessage} title="Send" color="#28a0bb"/> */}
            </View>

        </KeyboardAvoidingView>

        
    </SafeAreaView>
  );
};

export default MessageScreen;
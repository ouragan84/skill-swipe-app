import React, {useState, useEffect, useLayoutEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput} from 'react-native';
import {API_URL} from '@env';
import {socket, fetchUnprotected} from '../hooks/webRequestHelper'

export default function Logs (props) {
  const [logsText, setLogsText] = useState('Press FETCH and logs will appear here.\n');
  const [logSendMessage, setLogSendMessage] = useState('');
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {

    console.log(props)

    const onMessage = (value) => {
      setLogsText(previous => `${previous}\n${value}`);
    }

    socket.on('message', onMessage);

    return () => {
      socket.off('message', onMessage);
    };
  }, []);

  const sendLogs = () => {
    // socket.emit('message', logSendMessage)

    fetchUnprotected('/get/image-url/3feacfc5d4463a64bb7722cdd2526b89fd532f0db23cd02ae693d7ddee1d8e4b', 'GET', null, 
    (response)=>{console.log("EROOR " + response)}
    , (response)=>{console.log("WORKED " + response.url)})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logs</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text>API URL = {API_URL}</Text>

        <TextInput
          style={styles.inputcontent}
          onChangeText={setLogSendMessage}
          value={logSendMessage}
          placeholder="Message"
        />

        <TouchableOpacity style={styles.button} onPress={sendLogs}>
          <Text>SEND</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.monotext}>{logsText}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  logs:{
    fontSize: 12,
    color: '#444444',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#111111',
    padding: 10,
  },
  inputtitle:{
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputcontent:{
    height: 120,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  },
  monotext:{
    fontFamily: 'roboto-mono'
  }
});
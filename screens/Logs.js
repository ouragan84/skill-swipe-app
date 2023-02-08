import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput} from 'react-native';
import {API_URL} from '@env';

export default function Logs (props) {
  const [logsText, setLogsText] = useState('Press FETCH and logs will appear here.');
  const [logsCount, setLogsCount] = useState('Count: -');
  const [logSendTitle, setLogSendTitle] = useState('');
  const [logSendMessage, setLogSendMessage] = useState('');

  const sendLogs = () => {
    fetch(API_URL+'/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: logSendTitle,
        message: logSendMessage
      }),
    });
  }

  const fetchLogs = async () => {
    const json_logs = await fetch(API_URL+'/logs').then((response) => response.json());
    const logs_num = await fetch(API_URL+'/logs/count').then((response) => response.json());

      setLogsText(JSON.stringify(json_logs, null, 2));
      setLogsCount("Count: " + logs_num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logs</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text>API URL = {API_URL}</Text>

        <TextInput
          style={styles.inputtitle}
          onChangeText={setLogSendTitle}
          value={logSendTitle}
          placeholder="Title"
        />
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
          <Text style={styles.title}> RESULT: </Text>
          <TouchableOpacity style={styles.button} onPress={fetchLogs}>
            <Text>FETCH</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>{logsCount}</Text>
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

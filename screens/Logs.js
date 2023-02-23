import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform, TextInput, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import {API_URL} from '@env';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';


export default function Logs (props) {
  const [logsText, setLogsText] = useState('Press FETCH and logs will appear here.');
  const [logsCount, setLogsCount] = useState('Count: -');
  const [logSendTitle, setLogSendTitle] = useState('');
  const [logSendMessage, setLogSendMessage] = useState('');


  const [photo, setPhoto] = React.useState(null);
  const [caption, setCaption] = useState("")


  const [singleFile, setSingleFile] = React.useState(null);

  const createFormData = (photoUri, body = {}) => {
    const data = new FormData();

    console.log('HELLO')
  
    // data.append('photo', {
    //   name: photo.fileName,
    //   type: photo.type,
    //   uri: Platform.OS === 'ios' ? photo.replace('file://', '') : photo.uri, //  const  uri = image?.uri;
    // });
  

    // Object.keys(body).forEach((key) => {
    //   data.append(key, body[key]);
    // });
    var imageJSON = {
      imageName:new Date().getTime()+"_profile.png",
      avatar:photoUri,
      //name:name,
      //email:email,
      //SocietyCode:sCOde,
      //password:Password
    }
  
    data.append('image', JSON.stringify(imageJSON))
    //data.append('image', JSON.stringify(imageJSON))
    //data.append('image', Buffer.from(imageJSON.avatar))
  
    console.log('form data: ', JSON.stringify(imageJSON))
    //console.log('form data: ', Buffer.from(imageJSON.avatar))

    return data;
  };


 const handleChoosePhoto = async () => {
   // No permissions request is necessary for launching the image library
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });

   console.log(result);

   if (!result.canceled) {
      console.log('photo uri: ', result.assets[0].uri)
     setPhoto(result.assets[0].uri);
   }
 };

  const handleUploadPhoto = () => {
    //console.log(`${API_URL}/api/upload`)
    let uid = '123'
    let url = 'http://localhost:3000' + '/image/api/upload/' + uid
    fetch(url, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };



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

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
        
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

// "Content-Type": "multipart/form-data; boundary=some string"
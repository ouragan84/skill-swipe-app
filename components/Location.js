import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import Device from 'expo-device';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation();

  // TODO go back to where you came from
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();

      // Handle Permission Denied
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      else
      {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        // POST request to /user/locatiion/update?latitute=&longitute=?
        
        // go back to the screen you came from - TODO

      }
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
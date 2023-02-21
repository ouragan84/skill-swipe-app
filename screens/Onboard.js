import React from 'react';
import { Button, View, Text } from 'react-native';
import {
    createMaterialTopTabNavigator,
    createAppContainer
  } from "react-navigation";


export default function Onboard(props) {
    return (
        <View style={{ flex: 1, alignItems : 'center', justifyContent: 'center' }}>
        <Button
          title="Create an Account"
          onPress={() => props.navigation.navigate('Logs')}
        />
        <Button
          title="Sign in"
          onPress={() => props.navigation.navigate('Counter')}
        />
        </View>
    );
}
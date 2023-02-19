import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    buttonStyle: {
        height:60,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width:340,
        borderRadius: 18,
        margin: 12,
        borderWidth: 1,
        borderColor: "#ADAFBB",
        padding: 10,
        fontSize: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    iconStyle: {
        fontSize:20,
        color: "#ADAFBB"
    }
  });

export default function SRButtonM(props) {
    return (
        <View style={styles.buttonStyle}>
            <Text style={{fontSize:16}}>{props.name}</Text>
            <Icon style={styles.iconStyle} name="check"/>
        </View>
    );
};


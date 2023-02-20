import React, {useState}  from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    viewStyle: {
        marginTop:10,
        marginBottom:30,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function iconStyle(myColor) {
    return {
        fontSize:40,
        width:25,
        color: myColor
    }
}

export default function ThreeDotsM(props) {
    const grey = '#ADAFBB'
    const blue = '#28A0BB'

    return (
        <View style={styles.viewStyle}>
            <Icon name="dot-single" style={iconStyle(props.name[0] ? blue : grey)}/>
            <Icon name="dot-single" style={iconStyle(props.name[1] ? blue : grey)}/>
            <Icon name="dot-single" style={iconStyle(props.name[2] ? blue : grey)}/>
        </View>
    );
};
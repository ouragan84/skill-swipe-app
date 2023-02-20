import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        width:340,
        borderRadius: 18,
        margin: 12,
        borderWidth: 1,
        borderColor: "#ADAFBB",
        padding: 10,
        fontSize: 16
    },
    textStyle: {
        paddingHorizontal:5,
        backgroundColor:'white',
        position: 'absolute',
        color: '#888',
        top:4,
        left:45,
    }
  });

export default function InputM(props) {
    const [number, onChangeNumber] = React.useState('');
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={props.placeholder}
                keyboardType="numeric"
            /> 
            <Text style={styles.textStyle}>{props.name}</Text>
        </View>   
    );
};
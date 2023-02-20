import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';


export default function InputM(props) {
    const [number, onChangeNumber] = React.useState('');
    return (
        <View>
            <TextInput
                style={styles.inputBoxStyle}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={props.placeholder}
                keyboardType="numeric"
            /> 
            <Text style={styles.inputTextStyle}>{props.name}</Text>
        </View>   
    );
};
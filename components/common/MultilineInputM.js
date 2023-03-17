import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';


export default function MultilineInputM(props) {
    const [number, onChangeNumber] = React.useState('');
    return (
        <View>
            <TextInput
            editable
            multiline
            numberOfLines={4}
            style={styles.inputBigBoxStyle}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={props.placeholder}
            keyboardType="numeric"
            /> 
            <Text style={styles.inputTextStyle}>{props.name}</Text>
        </View>   
    );
};
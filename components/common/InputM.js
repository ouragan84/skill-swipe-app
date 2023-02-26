import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';


export default function InputM(props) {
    return (
        <View>
            <TextInput
                secureTextEntry = {props.password}
                style={styles.inputBoxStyle}
                onChangeText={props.onChangeValue}
                value={props.value}
                placeholder={props.placeholder}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
                autoComplete={props.autoComplete}
            /> 
            <Text style={styles.inputTextStyle}>{props.name}</Text>
        </View>   
    );
};
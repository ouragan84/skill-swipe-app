import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';
import { moderateScale } from '../helper/Metrics';


export default function InputM(props) {
    return (
        <View style={styles.inputBigBoxStyle}>
            <TextInput
                editable
                multiline
                style={{
                    fontSize:moderateScale(16)
                }}
                onChangeText={props.onChangeValue}
                value={props.value}
                placeholder={props.placeholder}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
            /> 
            <Text style={{
                paddingHorizontal:5,
                backgroundColor:'white',
                position: 'absolute',
                color: '#888',
                top:-8,
                left:30,
            }}>{props.name}</Text>
        </View>   
    );
};
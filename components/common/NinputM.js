import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';


export default function NinputM(props) {
    return (
        <View>
            <TextInput
                secureTextEntry = {props.password}
                style={{
                    paddingVertical: moderateScale(15),
                    width:horizontalScale(138),
                    borderRadius: moderateScale(18),
                    margin: moderateScale(12),
                    borderWidth: 1,
                    borderColor: "#ADAFBB",
                    padding: moderateScale(15),
                    fontSize: moderateScale(16)
                    
                }}
                keyboardType="numeric"
                onChangeText={props.onChangeValue}
                value={props.value}
                placeholder={props.placeholder}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
            /> 
            <Text style={styles.inputTextStyle}>{props.name}</Text>
        </View>   
    );
};
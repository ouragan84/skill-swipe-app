import React from 'react';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';


export default function NinputM(props) {

    let isEditable = props.isEditable!==undefined? props.isEditable: true

    console.log('can edit: ', isEditable)

    return (
        <View>
            <TextInput
                editable={isEditable}
                secureTextEntry = {props.password}
                style={{
                    paddingVertical: moderateScale(15),
                    width: props.width ? props.width: horizontalScale(138),
                    borderRadius: moderateScale(18),
                    margin: moderateScale(12),
                    borderWidth: 1,
                    borderColor: "#ADAFBB",
                    padding: moderateScale(15),
                    fontSize: moderateScale(12)
                    
                }}
                keyboardType="numeric"
                onChangeText={props.onChangeValue}
                value={props.value}
                placeholder={props.placeholder}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
            /> 
            {props.name ? <Text style={styles.inputTextStyle}>{props.name}</Text>:<></>}
        </View>   
    );
};
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../constants/styles';
import { moderateScale } from '../helper/Metrics';

function buttonStyle(w) {
    return {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(20),
        width:w,
        borderRadius: moderateScale(18),
        elevation: 3,
        backgroundColor: '#28A0BB',
      };
}

export default function ButtonM(props) {
    return (
        <TouchableOpacity onPress={()=>{props.click()}} style={props.width?buttonStyle(props.width) : buttonStyle(300)}>
            <Text style={styles.buttonTextStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};


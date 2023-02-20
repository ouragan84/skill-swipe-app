import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../constants/styles';

export default function ButtonM(props) {
    return (
        <TouchableOpacity onPress={()=>props.click()} style={styles.buttonBorderStyle}>
            <Text style={styles.buttonTextStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};


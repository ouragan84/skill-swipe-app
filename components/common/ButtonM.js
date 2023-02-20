import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyle from '../../constants/styles';

export default function ButtonM(props) {
    return (
        <TouchableOpacity onPress={()=>props.click()} style={buttonStyle.borderStyle}>
            <Text style={buttonStyle.textStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};


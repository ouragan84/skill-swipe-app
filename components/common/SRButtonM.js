import React, { useState } from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from '../../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';

function srButtonStyle(p) {
    return{
        backgroundColor: p ? '#28A0BB' : 'white',
        height:verticalScale(60),
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(20),
        width:horizontalScale(300),
        borderRadius: moderateScale(18),
        margin: 12,
        borderWidth: 1,
        borderColor: p ? "#fff": "#ADAFBB",
        fontSize: moderateScale(18),
        flexDirection: "row",
        justifyContent: 'space-between',
    }
}
function srIconStyle(p) {
    return {
        fontSize:moderateScale(18),
        color: p ? '#fff': "#ADAFBB" 
    }
}

export default function SRButtonM(props) {
    const [pressed, setPressed] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={()=>{
            props.click()
            setPressed(!pressed)
            if (pressed){
                // add tag
            }else{
                // remove tag
            }
        }}>
            <View style={srButtonStyle(pressed)}>
                <Text style={{fontSize:moderateScale(16), color: pressed ? "#fff": "black", fontWeight: pressed ? "bold" : "normal", letterSpacing:pressed ? .2 : .5}}>{props.name}</Text>
                <Icon style={srIconStyle(pressed)} name="check"/>
            </View>
        </TouchableWithoutFeedback>
    );
};


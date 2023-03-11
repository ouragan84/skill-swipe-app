import React from "react";
import {View, Text, Image} from 'react-native';
import { moderateScale } from "../helper/Metrics";

const ReceiverMessage = ({ message }) => {

    console.log('in receiver')

    return (
        <View style={{
            backgroundColor: '#e1eded',
            borderTopLeftRadius: moderateScale(18),
            borderTopRightRadius: moderateScale(18),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: moderateScale(18),
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            marginLeft: 60,
            marginTop: 8,
            marginBottom: 8,
            alignSelf: "flex-start",
        }}>
            <Image
                source={require('../../assets/images/techjob.png')}
                style={{ 
                    height: 48, 
                    width: 48, 
                    borderRadius: 24, 
                    position: 'absolute', 
                    top: 0, 
                    left: -53
                  }}
            
            />

            <Text style={{color: "#000"}}>
                {message}
            </Text>
        </View>
    )
}

export default ReceiverMessage;
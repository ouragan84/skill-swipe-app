import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import { moderateScale } from "../helper/Metrics";




const SenderMessage = ({ message }) => {

    return (
        <View style={{
            backgroundColor: '#28a0bb',
            borderTopLeftRadius: moderateScale(18),
            borderTopRightRadius: moderateScale(18),
            borderBottomLeftRadius: moderateScale(18),
            borderBottomRightRadius: 0,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 4,
            marginBottom: 4,
            alignSelf: "flex-start",
            marginLeft: "auto"
        }}
            >
            <Text style={{color: "#ffffff"}}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
  });
  

export default SenderMessage;
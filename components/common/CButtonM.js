import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../constants/styles';
import { moderateScale } from '../helper/Metrics';

export default function CButtonM(){
    return (
        <View style={{flexDirection: "row", width:moderateScale(300) , justifyContent: 'space-between', alignItems:'center', paddingBottom:75}}>
            <Text style={{color:"#888", fontSize:16}}>When's your Birthday?</Text>
            <RNDateTimePicker display='default' value={new Date()} maximumDate={new Date()} />
        </View>
    );
};


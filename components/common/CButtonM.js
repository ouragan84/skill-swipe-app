import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';

export default function CButtonM(){
    return (
        <View style={{width:horizontalScale(260)}}>
            <RNDateTimePicker display='inline' value={new Date()} maximumDate={new Date()} />
        </View>
    );
};


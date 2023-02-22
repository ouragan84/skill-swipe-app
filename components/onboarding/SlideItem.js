import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import ImageM from '../common/ImageM';
import { verticalScale } from '../helper/Metrics';

const {width, height} = Dimensions.get('screen')

const SlideItem = ({item}) => {
    return (
        <View style={styles_.container}>
            <ImageM source={item.img}/>
            <View style={styles_.content}>
                <Text style={styles.textOB1style}>{item.title}</Text>
                <Text style={styles.textOB2style}>{item.description}</Text>
            </View>
        </View>
    );
};

export default SlideItem;

const styles_ = StyleSheet.create({
    container: {
        width,
        height:verticalScale(565),
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
});
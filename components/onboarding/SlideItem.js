import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import ImageM from '../common/ImageM';
import { verticalScale } from '../helper/Metrics';

const {width, height} = Dimensions.get('screen')


const SlideItem = (props) => {

    const dataKeys = Object.keys(props.item)

    let dataToDisplay = (
        <View style={styles_.content}>
                    <Text style={styles.textOB1style}>{props.item.title}</Text>
                    <Text style={styles.textOB2style}>{props.item.description}</Text>
        </View>
    )

    if(props.isMain)
    {
        dataToDisplay = (
            <View style={styles_.content}>
                <Text style={styles.textOB1style}>{props.item.title}</Text>
                <Text style={styles.textOB2style}>{props.item.description}</Text>
                <Text style={styles.textOB2style}>{props.item.pay}</Text>
                <Text style={styles.textOB2style}>{props.item.distance}</Text>
            </View>
        )
    }


    return (
        <View style={styles_.container}>
            <ImageM source={props.item.img}/>
            {dataToDisplay}
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
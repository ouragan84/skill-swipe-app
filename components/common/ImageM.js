import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';

export default function ImageM(props) {
    return (
        <Image style={styles.imgStyle} source={props.source}/>
    );
};


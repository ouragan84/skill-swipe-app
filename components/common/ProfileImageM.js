import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';

export default function ProfileImageM(props) {
    return (
        <Image style={styles.profImgStyle} source={props.source}/>
    );
};


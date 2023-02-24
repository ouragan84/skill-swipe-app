import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';

export default function LogoImageM(props) {
    return (
        <Image style={styles.logoImgStyle} source={props.source}/>
    );
};


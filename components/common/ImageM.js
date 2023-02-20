import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imgStyle: {
      marginBottom: 40,
      borderRadius: 15,
      height: 400,
      width: 270
    },
  });

export default function ImageM(props) {
    return (
        <Image style={styles.imgStyle} source={props.source}/>
    );
};


import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 95,
        borderRadius: 18,
        elevation: 3,
        backgroundColor: '#28A0BB',
      },
      textStyle: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default function ButtonM(props) {
    return (
        <TouchableOpacity onPress={()=>props.click()} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};


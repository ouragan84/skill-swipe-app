import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Pagination = ({data}) => {
    return (
        <View style={styles.container}>
            {
                data.map((_, idx) => {
                    return <View key={idx.toString()} style={styles.dot} />;
                })}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
    },
});
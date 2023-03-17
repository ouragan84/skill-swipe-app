import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
import {Text, View,TextInput, StyleSheet} from 'react-native';
import {styles} from '../../constants/styles';

export default function NumericInputM(props) {
    return (
        <SafeAreaView>
            <View>
                <KeyboardAvoidingView enabled>
                    <View>
                        <TextInput
                            style={styles.inputBoxStyle}
                            placeholder="Enter number"
                            placeholderTextColor="#000"
                            keyboardType="number-pad">
                        </TextInput>
                        <Text style={styles.inputTextStyle}>{props.name}</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
};
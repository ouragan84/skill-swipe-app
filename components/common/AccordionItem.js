import React, {useState, useRef} from 'react';
import {Text, SafeAreaView, View, Image, FlatList, TouchableOpacity, Animated, StyleSheet, LayoutAnimation} from 'react-native';
import {moderateScale} from '../../components/helper/Metrics';
import ButtonM from '../../components/common/ButtonM';
import { MaterialIcons } from '@expo/vector-icons';
import { toggleAnimation } from '../../animations/toggleAnimation';

const AccordionItem = ({title, bodyText}) => {
    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(toggleAnimation);
        setShowContent(!showContent);
    };
    const arrowTransform = animationController.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        },
    );
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleListItem()}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
                        <MaterialIcons name={'keyboard-arrow-right'} size={30}/>
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {showContent && (
            <View style={styles.body}>
                <Text>{bodyText}</Text>
            </View>
    )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: '2%',
        overflow: 'hidden',
    },
    title: {
        fontsize: 16,
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
    body: {
        paddingHorizontal: '2%',
        paddingVertical: '3%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default AccordionItem;
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useState } from 'react';
import Slides from '../data' 
import SlideItem from './SlideItem'
import ButtonM from '../components/common/ButtonM';
import ImageM from '../components/common/ImageM'
import InputM from '../components/common/InputM'
import SRButtonM from '../components/common/SRButtonM'
import ThreeDotsM from '../components/special/ThreeDotsM';
import { styles } from '../constants/styles';
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';

const clickMe = () => {
console.log("a")
}

const Slider = () => {
    const [dots, setDots] = useState(0)

    return (
        <View>
            <FlatList showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    let xOffset = event.nativeEvent.contentOffset.x
                    let contentWidth = event.nativeEvent.contentSize.width
                    let value = xOffset / contentWidth
                    setDots(Math.floor(value * 2/.6) < 0 ? 0 : Math.floor(value * 2/.6))
                }}
                data={Slides} renderItem= {
                    ({item}) => <SlideItem item={item} />
                }
                horizontal
                pagingEnabled
                snapToAlignment='center'
         />
         <View style={{alignItems: 'center', justifyContent: 'center' }}>
           <ThreeDotsM name={Slides[dots].name}/>
           <ButtonM name="Create an account" click={clickMe}/>
           <Text style={{marginTop:moderateScale(25),fontSize: moderateScale(15)}}>Already have an account? <Text onPress={clickMe} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text></Text>
         </View>
        </View>
    );
};

export default Slider;
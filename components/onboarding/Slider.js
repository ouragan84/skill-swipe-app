import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useState } from 'react';
import Slides from '../../data' 
import SlideItem from './SlideItem'
import ButtonM from '../../components/common/ButtonM';
import ThreeDotsM from '../../components/special/ThreeDotsM';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';

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
                    let v = Math.floor(value * 2/.45)
                    if(v<0) v = 0
                    if(v>2) v = 2
                    setDots(v)
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


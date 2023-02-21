import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Slides from '../data'
import SlideItem from './SlideItem'
import Pagination from './Pagination'
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
    return (
        <View>
            <FlatList data={Slides} renderItem=
            {({item}) => <SlideItem item={item} />}
            horizontal
                pagingEnabled
                snapToAlignment='center'
                showHorizontalScrollIndicator={false}
         />
         <Pagination data={Slides}/>
         <View>
           <ThreeDotsM name={[true,false,false]}/>
           <ButtonM name="Create an account" click={clickMe}/>
           <Text style={{marginTop:moderateScale(25),fontSize: moderateScale(15)}}>Already have an account? <Text onPress={clickMe} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text></Text>
         </View>
        </View>
    );
};

export default Slider;

//const styles = StyleSheet.create({});
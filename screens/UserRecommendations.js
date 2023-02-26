import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Slides from '../data/businessProfiles' 
import SlideItem from '../components/onboarding/SlideItem'
import ButtonM from '../components/common/ButtonM';
import ThreeDotsM from '../components/special/ThreeDotsM';
import { horizontalScale, moderateScale, verticalScale } from '../components/helper/Metrics';
import BottomNavBar from '../components/main/BottomNavBar';
import BottomNavBar2 from '../components/main/BottomNavBar2';
//import NavBar from '../components/main/NavBar';

function clickMe() {
  console.log("b")
}

const UserRecommendations = (props) => {
  const [dots, setDots] = useState(0)
  return (
    <SafeAreaView>
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
                    ({item}) => <SlideItem item={item} isMain={true}/>
                }
                horizontal
                pagingEnabled
                snapToAlignment='center'
         />
         <View style={{alignItems: 'center', justifyContent: 'center' }}>
           <ThreeDotsM name={Slides[dots].name}/>
           <Text>NavBar</Text>
         </View>
        </View>
        
    </SafeAreaView>
  );
};

export default UserRecommendations;
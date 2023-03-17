import React from 'react';
import {Text, SafeAreaView, View, Image} from 'react-native';
import InputM from '../../../components/common/InputM';
import {moderateScale} from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';

function clickMe(props) {
    console.log("c")
  }


const SetLocation = (props) => {
    const clkMe = () => {
        props.navigation.navigate('SetLocation')
      }
    return (
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
            source={require('../../../assets/images/location-icon.jpeg')}
            resizeMethod='resize'
            style={{height: 150, width:150, borderRadius: 15}}>
            </Image>
            <View style={{paddingBottom:moderateScale(20)}}/>
            <ButtonM name="Enable Location" click={clkMe}/>
        </SafeAreaView>
    );
};

export default SetLocation;
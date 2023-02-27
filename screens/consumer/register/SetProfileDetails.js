import React from 'react';
import {Text, SafeAreaView, View, Image} from 'react-native';
import InputM from '../../../components/common/InputM';
import {moderateScale} from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import CButtonM from '../../../components/common/CButtonM';

function clickMe(props){
    console.log("c")
  }

const SetProfileDetails = (props) => {
   
    const clkMe = () => {
        props.navigation.navigate('SetLocation')
      }

    return (
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
            source={require('../../../assets/images/logo.png')}
            resizeMethod='resize'
            style={{height: 100, width:100, borderRadius: 15}}>
            </Image>
            <Text style={{fontSize:moderateScale(36), fontWeight:'bold', paddingBottom:50}}>Set Profile Details</Text>
            <InputM name="First Name" placeholder="Enter your first name"/>
            <InputM name="Last Name" placeholder="Enter your last name"/>
            <CButtonM></CButtonM>
            <View style={{paddingBottom:moderateScale(50)}}/>
                <ButtonM name="Confirm" click={clkMe} />
        </SafeAreaView>
    );
};

export default SetProfileDetails;
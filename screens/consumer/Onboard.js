import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Slides from '../../data' 
import SlideItem from '../../components/onboarding/SlideItem'
import ButtonM from '../../components/common/ButtonM';
import ThreeDotsM from '../../components/special/ThreeDotsM';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';
import * as auth from '../../hooks/authentication';
import {fetchUnprotected, fetchProtected, checkConsumerStatusAndNavigate} from '../../hooks/webRequestHelper';


function clickMe() {
  console.log("b")
}

const Onboard = (props) => {
  const [dots, setDots] = useState(0)

  // TODO: Do this on 
  const checkSavedCredentials = async () => {
    try{
      const {email, password} = await auth.getCredentials();
      if(email && password)
        return signInConsumer(email, password);
    }catch (err) {
      // do nothing
    }

    // authentication not found: goto onboarding
  }

  const signInConsumer = async (email, password) => {
    await fetchUnprotected('/consumer/login', 'POST', {
      email: email.toLowerCase(),
      password
    }, resetCredentials, goToNextScreen)
  }

  const goToNextScreen = async (response) => {
    try{
      await auth.saveToken(response.token);
      checkConsumerStatusAndNavigate(props.navigation);
    } catch (err){
      resetCredentials();
    }
  }

  const resetCredentials = async () => {
    auth.deleteCredentials();
  }

  checkSavedCredentials();

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
                    ({item}) => <SlideItem item={item} />
                }
                horizontal
                pagingEnabled
                snapToAlignment='center'
         />
         <View style={{alignItems: 'center', justifyContent: 'center' }}>
           <ThreeDotsM name={Slides[dots].name}/>
           <ButtonM name="Create an account" click={() => props.navigation.navigate('SignUp')}/>
           <Text style={{marginTop:moderateScale(25),fontSize: moderateScale(15)}}>Already have an account? <Text onPress={() => props.navigation.navigate('SignIn')} style={{color:'#28A0BB',fontWeight: 'bold',}}>Sign In</Text></Text>
         </View>
        </View>
    </SafeAreaView>
  );
};

export default Onboard;
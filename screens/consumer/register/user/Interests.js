import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import {Text, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonM from '../../../../components/common/ButtonM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';
import {fetchUnprotected, fetchProtected} from '../../../../hooks/webRequestHelper';

const Interests = (props) => {
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([10]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([20, 25]);
  const [multiSlider2Value, setMultiSlider2Value] = React.useState([2, 3]);
  const [errorText, setErrorText] = useState("");

  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
  const sliderOneValuesChange = values => setSliderOneValue(values);
  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const multiSlider2ValuesChange = values => setMultiSlider2Value(values);

  const [maxDistance, setMaxDistance] = useState(25)

  // 0 - remote, 1 - hybrid, 2 - inPerson
  const [workType, setWorkType] = useState([false,false,false])
  const [flexib, setFlexib] = useState([false,false,false])

  const submitIntrests = () => {
    // console.log("1", sliderOneValue);
    // console.log("2", multiSliderValue);
    // console.log("3", multiSlider2Value);
    // // console.log("4", maxDistance);
    // console.log("4", workType);
    // console.log("5", flexib);

    if(flexib.indexOf(true) < 0)
      return setErrorText("Please add your flexibility")


    fetchProtected('/user/set/preferences', 'POST', {
      maxDistance: sliderOneValue[0],
      hoursPerWeek: multiSliderValue,
      companySize: [multiSlider2Value[0]+1, multiSlider2Value[1]+1],
      isRemote: workType[0],
      isHybrid: workType[1],
      isInPerson: workType[2],
      hoursFlexibility: [flexib.indexOf(true)+1, flexib.indexOf(true)+1]

    }, setErrorText, () => props.navigation.navigate('Skills'), props.navigation)

    // props.navigation.navigate('Skills')
  }

  const buttonBorderStyleL = (w) => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(15),
      width:horizontalScale(100),
      borderBottomLeftRadius: moderateScale(18),
      borderTopLeftRadius: moderateScale(18),
      elevation: 3,
      backgroundColor: w ? '#28A0BB' : 'white',
      borderWidth:1,
      borderColor: w ? "white" :'#ADAFBB',
    }
  }
  const buttonBorderStyleM = (w) => {
    return{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(15),
      width:horizontalScale(100),
      elevation: 3,
      backgroundColor: w ? '#28A0BB' : 'white',
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor: w ? "white" :'#ADAFBB',
    }
  }
  const buttonBorderStyleR = (w) => {
    return{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(15),
      width:horizontalScale(100),
      borderBottomRightRadius: moderateScale(18),
      borderTopRightRadius: moderateScale(18),
      elevation: 3,
      backgroundColor: w ? '#28A0BB' : 'white',
      borderWidth:1,
      borderColor: w ? "white" :'#ADAFBB',
    }
  }
  const buttonTextStyle = (w) => {
    return {
      color: w ? "white" : "black",
      fontSize: moderateScale(16),
      fontWeight: w ?'bold':'default',
      letterSpacing: 0.25,
    }
  }
  
  const [cSize, setCsize] = useState(0)
  const sliderToCSIZE = (s) => {
    let ref = [1,10,50,100,500,"+"]
    return ref[s]
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold'}}>Preferences</Text>
      
      <View style={stylez.sliders}>
        <View style={stylez.sliderOne}>
          <Text style={stylez.text}>Maximum Distance</Text>
          <Text style={[stylez.text, sliderOneChanging && { color: 'black' }]}>
            {sliderOneValue >= maxDistance ? (maxDistance+"+") : sliderOneValue} miles
          </Text>
        </View>
        <MultiSlider
          values={sliderOneValue}
          min={1}
          max={maxDistance+1}
          sliderLength={horizontalScale(300)}
          onValuesChangeStart={sliderOneValuesChangeStart}
          onValuesChange={sliderOneValuesChange}
          onValuesChangeFinish={sliderOneValuesChangeFinish}
          selectedStyle={{ backgroundColor: '#28A0BB',}}
          unselectedStyle={{ backgroundColor: '#ADAFBB', }}
          trackStyle={{ height: 4, }}
        />

        
        <View style={stylez.sliderOne}>
          <Text style={stylez.text}>Hours Per Week</Text>
          <Text style={stylez.text}>{multiSliderValue[0]} to {multiSliderValue[1]} hours </Text>
        </View>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={horizontalScale(300)}
          onValuesChange={multiSliderValuesChange}
          min={10}
          max={40}
          step={5}
          allowOverlap={false}
          snapped
          selectedStyle={{ backgroundColor: '#28A0BB',}}
          unselectedStyle={{ backgroundColor: '#ADAFBB', }}
          trackStyle={{ height: 4, }}
        />

        <View style={stylez.sliderOne}>
          <Text style={stylez.text}>Company Size</Text>
          <Text style={stylez.text}>{sliderToCSIZE(multiSlider2Value[0])}{multiSlider2Value[1]<5 ? " to " : ""}{sliderToCSIZE(multiSlider2Value[1])} employees </Text>
        </View>
        <MultiSlider
          values={[multiSlider2Value[0], multiSlider2Value[1]]}
          sliderLength={horizontalScale(300)}
          onValuesChange={multiSlider2ValuesChange}
          min={0}
          max={5}
          step={1}
          allowOverlap={false}
          snapped
          selectedStyle={{ backgroundColor: '#28A0BB',}}
          unselectedStyle={{ backgroundColor: '#ADAFBB', }}
          trackStyle={{ height: 4, }}
        />
        <View style={{paddingBottom:moderateScale(20)}}/>

        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={()=>setWorkType([!workType[0],workType[1],workType[2]])}> 
            <View style={buttonBorderStyleL(workType[0])}>
              <Text style={buttonTextStyle(workType[0])}>Remote</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>setWorkType([workType[0],!workType[1],workType[2]])}>
            <View style={buttonBorderStyleM(workType[1])}>
              <Text style={buttonTextStyle(workType[1])}>Hybrid</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>setWorkType([workType[0],workType[1],!workType[2]])}>
            <View style={buttonBorderStyleR(workType[2])}>
              <Text style={buttonTextStyle(workType[2])}>In Person</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={{paddingBottom:moderateScale(10)}}/>
        <Text style={stylez.text}>How flexible do you want your work hours?</Text>
        <View style={{paddingBottom:moderateScale(5)}}/>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={()=>{
            let temp = flexib[0]
            setFlexib([!temp,false,false])
          }}> 
            <View style={buttonBorderStyleL(flexib[0])}>
              <Text style={buttonTextStyle(flexib[0])}>Rigid</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{
            let temp = flexib[1]
            setFlexib([false,!temp,false])
          }}> 
            <View style={buttonBorderStyleM(flexib[1])}>
              <Text style={buttonTextStyle(flexib[1])}>Fair</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{
            let temp = flexib[2]
            setFlexib([false,false,!temp])
          }}>             
          <View style={buttonBorderStyleR(flexib[2])}>
              <Text style={buttonTextStyle(flexib[2])}>Free</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{paddingBottom:moderateScale(10)}}/>
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <ButtonM name="Confirm" click={submitIntrests} />
  
    </SafeAreaView>
  );
};

const stylez = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: moderateScale(20),
    width: horizontalScale(300),
    justifyContent:'center',
    alignContent:'center'
  },
  text: {
    alignSelf: 'center',
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(5)  ,
    fontSize:moderateScale(15)
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});

export default Interests;
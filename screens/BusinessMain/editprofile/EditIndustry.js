import React, { useEffect, useState } from 'react';
import {Text, SafeAreaView,StyleSheet,ScrollView, View} from 'react-native';
import InputM from '../../../components/common/InputM';
import { horizontalScale, moderateScale, verticalScale } from '../../../components/helper/Metrics';
import ButtonM from '../../../components/common/ButtonM';
import Icon from 'react-native-vector-icons/Entypo';
import CButtonM from '../../../components/common/CButtonM';
import SRButtonM from '../../../components/common/SRButtonM';
import { Dimensions } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { fetchProtected, checkConsumerStatusAndNavigate} from '../../../hooks/webRequestHelper';

const { screenWidth, screenHeight } = Dimensions.get('window');

const EditIndustry = (props) => {  

  const prevInd = props.route.params.profile.industry;

  const confirm = () => {
    
    const i = refInd.indexOf(true);
    const industry = industries[i] == "Other" ? other : industries[i];
    fetchProtected('/company/set/industry', 'POST', {
      industry 
    }, setErrorText, () => checkConsumerStatusAndNavigate(props.navigation));

    // () => props.navigation.navigate('AddLogo')
  }

  //input - list of industries as an array
  let industryList = ["Agriculture",   
  "Culinary",  
  "Forestry",  
  "Fishing",   
  "Retail",    
  "Administration",    
  "Arts",  
  "Entertainment", 
  "Recreation",    
  "Construction",  
  "Defense",   
  "Education", 
  "Finance",   
  "Insurance", 
  "Healthcare",    
  "Hospitality",   
  "Social Assistance", 
  "Manufacturing", 
  "Mining",    
  "Technical Services",    
  "Real Estate",   
  "Transportation",    
  "Warehousing",   
  "Utilities", 
  "Wholesale", "Other"] 
  const [industries, setIndustries] = useState(industryList)
  const [other, setOther] = useState()
  const [errorText, setErrorText] = useState("");




  

  const [refInd, setRefInd] = useState([])

  

  useEffect(()=>{
    for(let i = 0; i < industries.length; i++){
      refInd[i] = false
    }

    let ind = industries.indexOf(prevInd)

    if(ind < 0){
      setOther(prevInd)
      refInd[refInd.length-1] = true
    }else{
      refInd[ind] = true
    }

    
  }, [])
  
  

  let otherComp;
  // console.log(ref)
  if(refInd[refInd.length-1]){
    otherComp = <InputM name="Other" placeholder="Type your company's industry" value={other} onChangeValue={setOther}/>
  }else{
    otherComp = <View style={{paddingBottom:moderateScale(85)}}/>
  }
  
  const handleIndustryClick = (k) => {
    let arr = []
    for(let i = 0; i < industries.length; i++){
      arr[i] = false
    }
    arr[k] = true
    setRefInd(arr)
  }

  const buttonBorderStyle = (w) => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(15),
      width:horizontalScale(250),
      borderRadius: moderateScale(18),
      elevation: 3,
      backgroundColor: w ? '#28A0BB' : 'white',
      borderWidth:1,
      borderColor: w ? "white" :'#ADAFBB',
      marginBottom:moderateScale(10)
    }
  }
  const buttonTextStyle = (w) => {
    return {
      color: w ? "white" : "black",
      fontSize: moderateScale(16),
      letterSpacing: w ? '0': '0.45',
      fontWeight: w ?'bold':'default',
    }
  }

  var industryComps = []
  for(let i = 0; i < industries.length; i++){
    industryComps.push(
      <TouchableWithoutFeedback key={i} onPress={()=>{handleIndustryClick(i)}}>
        <View style={buttonBorderStyle(refInd[i])}>
          <Text style={buttonTextStyle(refInd[i])}>{industries[i]}</Text>
        </View>
      </TouchableWithoutFeedback> 
    )
  }

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold' }}>Choose your industry</Text>
      <View style={{paddingBottom:moderateScale(30)}}/>
      <ScrollView style={{width:horizontalScale(270),backgroundColor:"#eeeeee", borderRadius:moderateScale(22),flexGrow:0, height:verticalScale(400)}}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{paddingBottom:moderateScale(10)}}/>
          {industryComps}
        </View>
      </ScrollView>
      <View style={{paddingBottom:moderateScale(10)}}/>
      {otherComp}
      <ButtonM name="Confirm" click={confirm}/>
      <Text style={{paddingTop:50, color:'#c22'}}>{errorText}</Text>
      <View style={{paddingBottom:moderateScale(10)}}/>
    </SafeAreaView>
  );
};

export default EditIndustry;
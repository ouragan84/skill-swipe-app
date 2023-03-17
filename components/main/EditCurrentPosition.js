import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useEffect, useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonM from '../common/ButtonM';
import InputM from '../common/InputM';
import MLinputM from '../common/MLinputM';
import NinputM from '../common/NinputM';
import SRButtonM from '../common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../helper/Metrics';
import { styles } from '../../constants/styles';
import SkillsListB from '../../components/helper/SkillsListB';
import SkillsListItem from '../../screens/consumer/register/business/helper-components/SkillsListItem';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected, checkConsumerStatusAndNavigate} from '../../hooks/webRequestHelper';
import {skillsList} from '../../data/skillTags'
import * as Location from 'expo-location';



const EditCurrentPosition = (props) => {

  // console.log("props", props)

  const position = props.position;
  const position_index = props.position_index;


  // const getCurrentPriorities = () => {
  //   skill_p = [];

  //   for(let i = 0; i < position.information.skills.length; ++i ){
  //     let p;
  //     switch (position.settings.skillsImportance[i]){
  //       case 1: p = 'Low'; break;
  //       case 2: p = 'Medium'; break;
  //       case 3: p = 'High'; break;
  //       default: return setErrorText('Please select importance for each skill');
  //     }
  //     skill_p.push([position.information.skills[i], p])
  //   }

  //   console.log(skill_p);

  //   return skill_p
  // }

  // let skill_p = getCurrentPriorities();
  // console.log("positon:", position)


  // const [modalVisible, setModalVisible] = useState(false);
  // const [skillCount, setSkillCount] = useState(`${position.information.skills.length}`)

  // const [multiSliderValue, setMultiSliderValue] = React.useState(position.information.payRange);
  // const multiSliderValuesChange = values => setMultiSliderValue(values);
  // const [multiSlider2Value, setMultiSlider2Value] = React.useState(position.information.hoursPerWeek);
  // const multiSlider2ValuesChange = values => setMultiSlider2Value(values);
  // const [multiSlider3Value, setMultiSlider3Value] = React.useState([Math.floor(position.information.monthsRelevantExperience/12), position.information.monthsRelevantExperience%12]);
  // const multiSlider3ValuesChange = values => setMultiSlider3Value(values);
  // const [errorText, setErrorText] = useState("");
  // const [title, setTitle] = useState(position.information.title);
  // const [description, setDescription] = useState(position.information.description);
  // const [roleCount, setRoleCount] = useState(`${position.settings.fillGoalCount}`);
  // const [skillPriorities, setSkillPriorities] = useState(skill_p);
  // const [branchSize, setBranchSize] = useState(position.settings.fillGoalCount);

  // const [workType, setWorkType] = useState([position.information.isRemote,position.information.isHybrid,position.information.isInPerson])
  // const [ageRange, setAgeRange] = useState([position.settings.acceptsOver16,position.settings.acceptsOver18,position.settings.acceptsOver21])
  // const [flexib, setFlexib] = useState([position.information.hoursFlexibility == 1,position.information.hoursFlexibility == 2,position.information.hoursFlexibility == 3])



  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)

  const [multiSliderValue, setMultiSliderValue] = React.useState([15, 30]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const [multiSlider2Value, setMultiSlider2Value] = React.useState([15, 30]);
  const multiSlider2ValuesChange = values => setMultiSlider2Value(values);
  const [multiSlider3Value, setMultiSlider3Value] = React.useState([3, 4]);
  const multiSlider3ValuesChange = values => setMultiSlider3Value(values);
  const [errorText, setErrorText] = useState("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [roleCount, setRoleCount] = useState();
  const [skillPriorities, setSkillPriorities] = useState([]);
  const [branchSize, setBranchSize] = useState();

  const [workType, setWorkType] = useState([false, false, false])
  const [ageRange, setAgeRange] = useState([false, false, false])
  const [flexib, setFlexib] = useState([false, false, false])



  const confirm = async () => {
    // setSkillCount(skillCount+1)

    console.log("CONFIRMING")

    setErrorText('')

    let { status } = await Location.requestForegroundPermissionsAsync();

    // Handle Permission Denied
    if (status !== 'granted') {
      return setErrorText('Permission to access location was denied');
      
    }

    let location = await Location.getCurrentPositionAsync({});

    const skills = [];
    const skillsImportance = [];

    console.log("skillPriorities", skillPriorities);

    for(let i = 0; i < skillPriorities.length; ++i){
      // if(skillPriorities[i][0].length == 0)
      //   return setErrorText('Try Selecting skills');

      if(!skillPriorities[i])
        return setErrorText('Please select importance for each skill');

      let imp;

      switch (skillPriorities[i][1]){
        case 'Low': imp = 1; break;
        case 'Medium': imp = 2; break;
        case 'High': imp = 3; break;
        default: return setErrorText('Please select importance for each skill');
      }

      skillsImportance.push(imp);
      skills.push(skillPriorities[i][0]);
    }

    

    fetchProtected(`/company/edit/position/${position_index}`, 'PUT', {
      title,
      description,
      fillGoalCount: Number(roleCount),
      payRange: multiSliderValue,
	    hoursPerWeek: multiSlider2Value, 
	    monthsRelevantExperience: [multiSlider3Value[0]*12, multiSlider3Value[1]*12], 
      isRemote: workType[0],
      isHybrid: workType[1],
      isInPerson: workType[2],
      acceptsOver16: ageRange[0],
      acceptsOver18: ageRange[1],
      acceptsOver21: ageRange[2],
      hoursFlexibility: flexib.indexOf(true)+1,
      skillsImportance,
      skills,
      location: [location.coords.latitude, location.coords.longitude],
      branchSize: Number(branchSize)
  }, setErrorText, async () => {

    console.log("HELLO")
    // setModalVisible(false);
    // setSkillCount(0);
    // setMultiSliderValue([15, 30]);
    // setMultiSlider2Value([15, 30]);
    // setMultiSlider3Value([3, 4]);
    // setErrorText("");
    // setTitle();
    // setDescription();
    // setRoleCount();
    // setSkillPriorities([]);
    // setSelectedSkills([]);
    // props.navigation.navigate('Position', {num: props.route.params.index + 1}) 

    // reset with dashboard

    await fetchProtected('/company/get/complete-info', 'GET', null, (response) => {}, async (response) => {

        console.log("Hello 2")

        let positionInfos = [];

        for(let i = 0; i < response.company.positions.length; ++i){
            await fetchProtected(`/company/get/complete-position-info/${i}`, 'GET', null, (response) => {}, (response) => {
                positionInfos.push(response.position);
            }, props.navigation);
        }

        let profile = response.company;
        profile.positionInfos = positionInfos;

        props.navigation.reset({
            index: 0,
            routes: [{ 
                name: 'Dashboard' ,
                params: {
                    isTypeUser: false,
                    profile: profile
                }
            },{
              name: 'TopNavBar' ,
                params:  { 
                  screen: 'EditCurrentPosition',
                  profile: profile,
                  isTypeUser: false,
                  position_index: position_index,
                  positionInfos: positionInfos
                }
            }
            ], // user main
        });


    }, props.navigation);

  }, props.navigation);
    

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

  const [selectedSkills, setSelectedSkills] = useState([])

  // THIS SKILLPRIORITIES ARRAY IS ALL YOU NEED FOR THE BACKEND
  // THE FORMAT IS ['skill', 'difficulty']
  // let skillPriorities = []

  const setSkillPriority = (a, i) =>{
    // const poopy = skillPriorities;

    // if(i >= 5)
    //   return;

    skillPriorities[i] = a

    setSkillPriorities(skillPriorities);

  }

  const renderItem = (item,i) => { 
    return(
      <SkillsListItem key={i} item={item} i={i} skillsList={skillsList} selectedSkills={selectedSkills} callbackSkillCount={setSkillCount} callbackSelectedSkills={setSelectedSkills} callbackSkillPri={setSkillPriority}/> 
    )
  }

  const vToRE = (v) => {
    // let ref = [0, 1, 5, 10, "+"]
    // return ref[v]

    if(v == 20)
      return '+'
    return v
  }

  const handleRelExpDisplay = () => {
    if(multiSlider3Value[0] == 0 && multiSlider3Value[1] == 20)
      return "Any"
    
    if(multiSlider3Value[1] == 20){
      return vToRE(multiSlider3Value[0]) + vToRE(multiSlider3Value[1]) + ' years'
    }else{
      return vToRE(multiSlider3Value[0]) + " to "+ vToRE(multiSlider3Value[1]) + ' years'
    } 
  }

  // console.log(selectedSkills, skillPriorities)


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
      <Text style={{fontSize:moderateScale(20), fontWeight:'bold', paddingVertical:moderateScale(20)}}>Edit Position</Text>
      <ScrollView style={{width:'100%',backgroundColor:"white",flexGrow:0, height:'100%'}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <InputM name="Title" placeholder="Enter job title" value={title} onChangeValue={setTitle}/>
      <MLinputM name="Description" placeholder="Enter job description" value={description} onChangeValue={setDescription}/>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={stylez.centeredView}>
          <View style={stylez.modalView}>  
            <ScrollView style={{width:horizontalScale(300), padding:moderateScale(10), backgroundColor:"#eeeeee"}}>
              <SkillsListB skillsList={skillsList} callback={setSelectedSkills} countCallback={setSkillCount} selected={selectedSkills} maxCount={5} isUnlimited={false}/>
            </ScrollView>
            <View style={{paddingBottom:moderateScale(15)}}/>
            <ButtonM name={`Done (${skillCount}/5)`}  click={() => {
              console.log(selectedSkills)
              setSkillCount(selectedSkills.length)
              setModalVisible(!modalVisible)
            }}/>
          </View>
        </View>
      </Modal>
      <View style={{paddingBottom:moderateScale(10)}}/>
      <ButtonM name={`Add Skill Tags (${skillCount}/5)`} click={() => setModalVisible(!modalVisible)}/>
      
      {selectedSkills.length>0 ? <Text style={stylez.text}>Select your skills' priorities</Text>:<></>}
      <View style={{paddingBottom:moderateScale(10)}}/>
      {
        selectedSkills.map((item,index) => {
          return renderItem(item,index)
        })
      }


      <View>
      <View style={stylez.sliderOne}>
        <Text style={stylez.text}>Pay Range</Text>
        <Text style={stylez.text}>${multiSliderValue[0]}{multiSliderValue[1]>40 ? "+" : (" - $"+multiSliderValue[1])} per hour</Text>
      </View>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={horizontalScale(300)}
        onValuesChange={multiSliderValuesChange}
        min={10}
        max={45}
        step={5}
        allowOverlap={false}
        snapped
        selectedStyle={{ backgroundColor: '#28A0BB',}}
        unselectedStyle={{ backgroundColor: '#ADAFBB', }}
        trackStyle={{ height: 4, }}
      />
      </View>

      <View>
      <View style={stylez.sliderOne}>
        <Text style={stylez.text}>Hours per week</Text>
        <Text style={stylez.text}>{multiSlider2Value[0]} to {multiSlider2Value[1]} hours</Text>
      </View>
      <MultiSlider
        values={[multiSlider2Value[0], multiSlider2Value[1]]}
        sliderLength={horizontalScale(300)}
        onValuesChange={multiSlider2ValuesChange}
        min={10}
        max={40}
        step={5}
        allowOverlap={false}
        snapped
        selectedStyle={{ backgroundColor: '#28A0BB',}}
        unselectedStyle={{ backgroundColor: '#ADAFBB', }}
        trackStyle={{ height: 4, }}
      />
      </View>

      <View>
      <View style={stylez.sliderOne}>
        <Text style={stylez.text}>Relevant Experience</Text>
        <Text style={stylez.text}>{handleRelExpDisplay()}</Text>
      </View>
      <MultiSlider
        values={[multiSlider3Value[0], multiSlider3Value[1]]}
        sliderLength={horizontalScale(300)}
        onValuesChange={multiSlider3ValuesChange}
        min={0}
        max={20}
        step={1}
        allowOverlap={false}
        snapped
        selectedStyle={{ backgroundColor: '#28A0BB',}}
        unselectedStyle={{ backgroundColor: '#ADAFBB', }}
        trackStyle={{ height: 4, }}
      />
      </View>



      {/* <SRButtonM name="Accept Minors" click={()=>{console.log("a")}} tick={true}/> */}
      <Text style={stylez.text}>Age range</Text>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>setAgeRange([true,false,false])}> 
          <View style={buttonBorderStyleL(ageRange[0])}>
            <Text style={buttonTextStyle(ageRange[0])}>16+</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setAgeRange([false,true,false])}>
          <View style={buttonBorderStyleM(ageRange[1])}>
            <Text style={buttonTextStyle(ageRange[1])}>18+</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setAgeRange([false,false,true])}>
          <View style={buttonBorderStyleR(ageRange[2])}>
            <Text style={buttonTextStyle(ageRange[2])}>21+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={stylez.text}>Select the job type</Text>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>setWorkType([true,false,false])}> 
          <View style={buttonBorderStyleL(workType[0])}>
            <Text style={buttonTextStyle(workType[0])}>Remote</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setWorkType([false,true,false])}>
          <View style={buttonBorderStyleM(workType[1])}>
            <Text style={buttonTextStyle(workType[1])}>Hybrid</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>setWorkType([false,false,true])}>
          <View style={buttonBorderStyleR(workType[2])}>
            <Text style={buttonTextStyle(workType[2])}>In Person</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={{paddingBottom:moderateScale(10)}}/>
      <Text style={stylez.text}>How flexible are the position's hours?</Text>
      <View style={{paddingBottom:moderateScale(5)}}/>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[0]
          setFlexib([true,false,false])
        }}> 
          <View style={buttonBorderStyleL(flexib[0])}>
            <Text style={buttonTextStyle(flexib[0])}>Rigid</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[1]
          setFlexib([false,true,false])
        }}> 
          <View style={buttonBorderStyleM(flexib[1])}>
            <Text style={buttonTextStyle(flexib[1])}>Fair</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
          let temp = flexib[2]
          setFlexib([false,false,true])
        }}>             
        <View style={buttonBorderStyleR(flexib[2])}>
            <Text style={buttonTextStyle(flexib[2])}>Free</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={{paddingBottom:moderateScale(15)}}/>

      <View style={{justifyContent:'space-between', flexDirection:'row', width:horizontalScale(300)}}>
        <Text style={{alignSelf: 'center',paddingBottom: moderateScale(5),fontSize:moderateScale(15)}}>
          Number of open roles
        </Text>
        <NinputM placeholder="" width={moderateScale(100)} value={roleCount} onChangeValue={setRoleCount}/>
      </View>

      <View style={{justifyContent:'space-between', flexDirection:'row', width:horizontalScale(300)}}>
        <Text style={{alignSelf: 'center',paddingBottom: moderateScale(5),fontSize:moderateScale(15)}}>
          Number of employees in branch
        </Text>
        <NinputM placeholder="" width={moderateScale(100)} value={branchSize} onChangeValue={setBranchSize}/>
      </View>

      <Text style={{paddingTop:20, color:'#c22'}}>{errorText}</Text>

      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Confirm" click={confirm}/>
      <View style={{paddingBottom:moderateScale(40)}}/>

      </View>
      </ScrollView>    

    </SafeAreaView>
    
  );
}


const stylez = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
    paddingBottom: moderateScale(5),
    fontSize:moderateScale(15)
  },
  textS: {
    alignSelf: 'center',
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(5),
    fontSize:moderateScale(15),
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});


export default EditCurrentPosition;
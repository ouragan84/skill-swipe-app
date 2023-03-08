import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonM from '../../../../components/common/ButtonM';
import InputM from '../../../../components/common/InputM';
import MLinputM from '../../../../components/common/MLinputM';
import NinputM from '../../../../components/common/NinputM';
import SRButtonM from '../../../../components/common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/helper/Metrics';
import { styles } from '../../../../constants/styles';
import SkillsListB from './helper-components/SkillsListB';

const Position = (props) => {
  const [num, setNum] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)

  const [multiSliderValue, setMultiSliderValue] = React.useState([15, 30]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const [multiSlider2Value, setMultiSlider2Value] = React.useState([15, 30]);
  const multiSlider2ValuesChange = values => setMultiSlider2Value(values);

  let skillsList=[
    "Access Platform",
"Application Development/Technology",
"Architecture",
"Artificial Intelligence",
"Banner Advertisement",
"Business Analytics",
"Business Continuity",
"Business Support Systems (BSS)",
"Business to Business (B2B)",
"Business to Consumer (B2C)",
"Business Transformation",
"C",
"C#",
"C++",
"Change Management",
"Co-Branding",
"Competitive Intelligence",
"Component Development",
"CSS (Cascading Style Sheets)",
"Data Controlling",
"Data Gathering",
"Data Mining/Warehousing",
"Database Administration/Manager",
"Database Development",
"Database Integration",
"Delivery Systems",
"Digital Marketing",
"Digital Media",
"Distribution Channels",
"E-commerce",
"E-portal",
"Electronic Data Interchange (EDI)",
"Electronic Marketing",
"Encryption",
"End-user Support",
"Fault Analysis",
"Framework",
"Geographic Information System (GIS)",
"Global HITS",
"Graphic Design",
"HTML",
"Information Security",
"Information Technology",
"Infrastructure Development",
"Intellectual Property Rights (IPR)",
"Java",
"Knowledge Management",
"LAN/WAN",
"Licensing",
"Machine Learning",
"Management Information System (MIS)",
"Market-Space",
"Mergers and Acquisitions",
"Multiplatform Integration",
"Needs Assessment",
"Network Administration/Management",
"Network Solutions",
"Online Advertising",
"Operations Support Systems (OSS)",
"Oracle",
"Process Re-Engineering",
"Product Launch/Testing",
"Program Management",
"Programming",
"Project Management",
"Python",
"Quality Assurance",
"Reach",
"React JS",
"Research and Development",
"Root Cause Analysis",
"SAS/SPSS",
"Search Engine Optimization (SEO)",
"Software Configuration",
"Software Engineering",
"Solutions Delivery/Strategies",
"Storefront",
"Structured Query Language (SQL)",
"Systems Administration",
"Systems Development Life Cycle (SDLC)",
"Technical Documentation",
"Technical Support",
"Trading",
"Turnkey",
"Unix",
"Vendor Management",
"Visual Basic",
"Voice over Internet Protocol (VoIP)",
"Vortals (Vertical Industry Portals)",
"Web Administration",
"Web Based Technology",
"Yield Management",
]

  const clickMe = () => {
    setSkillCount(skillCount+1)
  }

  // 0 - remote, 1 - hybrid, 2 - inPerson
  const [workType, setWorkType] = useState([false,false,false])
  const [ageRange, setAgeRange] = useState([false,false,false])
  const [flexib, setFlexib] = useState([false,false,false])

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

  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#edf5f7'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(30)}}>Add Position {num}</Text>
      
      <ScrollView style={{width:'100%',backgroundColor:"white",flexGrow:0, height:verticalScale(480)}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <InputM name="Title" placeholder="Enter job title"/>
      <MLinputM name="Description" placeholder="Enter job description"/>
      
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
              <SkillsListB skillsList={skillsList} callback={setSelectedSkills} countCallback={setSkillCount} selected={selectedSkills}/>
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
      
      <View style={{paddingBottom:moderateScale(5)}}/>
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

      <View style={{paddingBottom:moderateScale(10)}}/>
      <View style={{justifyContent:'space-between', flexDirection:'row', width:horizontalScale(300)}}>
        <Text style={{alignSelf: 'center',paddingBottom: moderateScale(5),fontSize:moderateScale(15)}}>
          Number of open roles
        </Text>
        <NinputM placeholder="" width={moderateScale(100)}/>
      </View>

      <View style={{paddingBottom:moderateScale(40)}}/>
      </View>
      </ScrollView>

      <View style={{paddingBottom:moderateScale(40)}}/>
      <Text onPress={() => props.navigation.navigate('TestScreen')} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Done adding positions</Text>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <ButtonM name="Add another position +" click={()=>{setNum(num+1)}}/>        

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
    fontSize:moderateScale(18),
    letterSpacing:.45,
    fontWeight:'bold',
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});


export default Position;
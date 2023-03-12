import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useEffect, useState } from 'react';
import {Text,TextInput,Modal,ScrollView, SafeAreaView, View, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonM from '../../components/common/ButtonM';
import InputM from '../../components/common/InputM';
import MLinputM from '../../components/common/MLinputM';
import NinputM from '../../components/common/NinputM';
import SRButtonM from '../../components/common/SRButtonM';
import { horizontalScale, moderateScale, verticalScale } from '../../components/helper/Metrics';
import { styles } from '../../constants/styles';
import SkillsListB from '../consumer/register/business/helper-components/SkillsListB';
import SkillsListItem from '../consumer/register/business/helper-components/SkillsListItem';
import Icon from 'react-native-vector-icons/Entypo';
import {fetchUnprotected, fetchProtected, checkConsumerStatusAndNavigate} from '../../hooks/webRequestHelper';


const AddPosition = (props) => {
  const [num, setNum] = useState(1)
  // useEffect(() => {
  //   fetchProtected('/company/get/complete-info', 'GET', null, (response) => {/*error handling*/}, (response) => {
  //     console.log(response.company.positions.length)
  //   }, props.navigation)
  // })

  const [modalVisible, setModalVisible] = useState(false);
  const [skillCount, setSkillCount] = useState(0)

  const [multiSliderValue, setMultiSliderValue] = React.useState([15, 30]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const [multiSlider2Value, setMultiSlider2Value] = React.useState([15, 30]);
  const multiSlider2ValuesChange = values => setMultiSlider2Value(values);
  const [multiSlider3Value, setMultiSlider3Value] = React.useState([3, 4]);
  const multiSlider3ValuesChange = values => setMultiSlider3Value(values);

  let skillsList=[
    "Java",
"Python",
"C++",
"JavaScript",
"PHP",
"Ruby",
"Swift",
"Objective-C",
"Kotlin",
"Go",
"TypeScript",
"Rust",
"Perl",
"Lua",
"Bash - Shell",
"Powershell",
"Scala",
"R",
"MATLAB",
"Dart",
"Visual Basic (VB)",
"C#",
"Haskell",
"Erlang",
"Lisp",
"Clojure",
"Assembly language",
"SQL (Structured Query Language)",
"HTML/CSS",
"XML",
"JSON",
"GraphQL",
"Solidity (for blockchain)",
"Dart (for Flutter)",
"Julia",
"Groovy",
"Tcl (Tool Command Language)",
"Prolog",
"Ada",
"Cobol",
"ReactJS",
"Angular",
"Vue.js",
"Ruby on Rails",
"Django",
"Laravel",
"Express.js",
"Flask",
"ASP.NET",
"Spring Boot",
"Database management",
"Agile methodology",
"Object-oriented programming",
"Algorithms",
"Machine learning",
"Data analytics",
"Cloud computing",
"DevOps",
"UX/UI design",
"Mobile app development",
"Version control",
"Network security",
"System administration",
"Artificial intelligence",
"Computer graphics",
"Test-driven development",
"Project management",
"Web server administration",
"Scripting",
"Data visualization",
"Cybersecurity",
"Data mining",
"Operating systems",
"API design",
"Embedded systems",
"Virtualization",
"Data modeling",
"Information retrieval",
"Distributed systems",
"Computer vision",
"Natural language processing",
"Big data",
"Microservices",
"Data warehousing",
"Serverless computing",
"Containerization",
"Object-relational mapping",
"Business intelligence",
  ]

  const clickMe = () => {
    setSkillCount(skillCount+1)
  }

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

  // THIS SKILLPRIORITIES ARRAY IS ALL YOU NEED FOR THE BACKEND
  // THE FORMAT IS ['skill', 'difficulty']
  let skillPriorities = []
  for(let i = 0; i < selectedSkills.length; i++){
    skillPriorities[i] = ["",""]
  }
  const setSkillPriorities = (a, i) =>{
    skillPriorities[i] = a
  }

  const renderItem = (item,i) => { 
    return(
      <SkillsListItem key={i} item={item} i={i} skillsList={skillsList} selectedSkills={selectedSkills} callbackSkillCount={setSkillCount} callbackSelectedSkills={setSelectedSkills} callbackSkillPri={setSkillPriorities}/> 
    )
  }

  const vToRE = (v) => {
    let ref = [0, 1, 5, 10, "+"]
    return ref[v]
  }

  const handleRelExpDisplay = () => {
    if(multiSlider3Value[0] == 0 && multiSlider3Value[1] == 4)
      return "None"
    
    if(multiSlider3Value[1] == 4){
      return vToRE(multiSlider3Value[0]) + vToRE(multiSlider3Value[1])
    }else{
      return vToRE(multiSlider3Value[0]) + " to "+ vToRE(multiSlider3Value[1])
    }
  }


  return (
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#edf5f7'}}>
      <Text style={{fontSize:moderateScale(32), fontWeight:'bold', paddingBottom:moderateScale(30)}}>Add Position {num}</Text>
      
      <ScrollView style={{width:'100%',backgroundColor:"white",flexGrow:0, height:verticalScale(500)}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom:moderateScale(20)}}/>
      <InputM name="Title" placeholder="Enter job title"/>
      <MLinputM name="Description" placeholder="Enter job description"/>
      
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
        max={4}
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
        <NinputM placeholder="" width={moderateScale(100)}/>
      </View>


      <View style={{paddingBottom:moderateScale(40)}}/>
      </View>
      </ScrollView>

      <View style={{paddingBottom:moderateScale(20)}}/>
      <Text onPress={() => {
        console.log(skillPriorities)
        props.navigation.navigate('Dashboard')
      }} style={{fontSize:moderateScale(15), color:'#28A0BB'}}>Done adding positions</Text>
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
    fontSize:moderateScale(15),
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center'
  },
});


export default AddPosition;
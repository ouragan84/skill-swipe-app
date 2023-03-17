import React from 'react';
import { styles } from '../constants/styles';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from 'react-native';
import Message from '../components/main/MessageItem';
import Icon from '../components/main/Icon';
// import Demo from '../data/messagesData';
import {fetchProtected, getPhoto} from '../hooks/webRequestHelper'
import { moderateScale, verticalScale } from '../components/helper/Metrics';

const Messages = (props) => {
  
  // if(route && route.params)
  // {
  //   navSource = route.params.navigation
  //   console.log('route')
  // }
    
  // else  
  // {
  //   navSource = props.navigation
  //   console.log('props')
  // }

  const [photos, setPhotos] = React.useState([]);
  const [names, setNames] = React.useState([]);
  const [descriptions, setDescriptions] = React.useState([]);

  let str = "asdasd"

  React.useEffect(()=>{
    let photos_ = [];
    let names_ = [];
    let descriptions_ = [];

    console.log("Getting Matches " + props.isTypeUser)

    if(props.isTypeUser){
      fetchProtected('/main/user/get/matches', 'GET', null, (response) => {
        console.log("My User Matches Failed: ", response)
      }, (response) => {
        console.log("My User Matches: ", response)

        response.matches.forEach(pos => {
          photos_.push(pos.companyInfo.profilePicture);
          names_.push(pos.positionInfo.title);
          // descriptions_.push();

          let a = pos.positionInfo.description.split(" ").slice(0,10)
          let s = ""
          for(let i = 0; i< a.length; i++) s += a[i] + " "
          s= s.replace(',', ' ')
          descriptions_.push(s+(a.length >= 10 ? "...":""));
        });

        

        setPhotos(photos_);
        setNames(names_);
        setDescriptions(descriptions_);
      }, props.dashNav)
    }else{
      fetchProtected(`/main/company/get/matches/${props.pos_index}`, 'GET', null, (response) => {
        console.log("My Company Matches Failed: ", response)
      }, (response) => {
        console.log("My Company Matches: ", response)
        
        response.matches.forEach(user => {
          photos_.push(user.profilePicture);
          names_.push(user.personalInformation.firstName + ' ' + user.personalInformation.lastName);
          let a = user.personalInformation.description.split(" ").slice(0,10)
          let s = ""
          for(let i = 0; i< a.length; i++) s += a[i] + " "
          s= s.replace(',', ' ')
          descriptions_.push(s+(a.length >= 10 ? "...":""));
        });

        setPhotos(photos_);
        setNames(names_);
        setDescriptions(descriptions_);
      }, props.dashNav)
    }


    

  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <ScrollView>
            {names.length > 0 ?
            
              names.map((item, index)=> (
        
                <Message
                  key={index}
                  image={photos[index]}
                  name={names[index]}
                  lastMessage={descriptions[index]}
                  navigation={props.dashNav}
                />
              ))
            :<Text style={{textAlign:"center", alignItems:'center', paddingTop:moderateScale(100), fontSize:moderateScale(18)}}>No matches yet...</Text>
              }
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
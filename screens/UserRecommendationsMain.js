import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import UserRecommendations from './UserRecommendations';
import BottomNavBar2 from '../components/main/BottomNavBar2';
//import NavBar from '../components/main/NavBar';

function clickMe() {
  console.log("b")
}

const UserRecommendationsMain = (props) => {
  //const [dots, setDots] = useState(0)
  return (
    <SafeAreaView>
      <UserRecommendations/>
      <BottomNavBar2/>
    </SafeAreaView>
  );
};

export default UserRecommendationsMain;
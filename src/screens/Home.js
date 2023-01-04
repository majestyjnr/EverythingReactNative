import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>

      <Stories/>

    </ScrollView>
  );
};

export default Home;

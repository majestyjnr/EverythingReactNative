import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import Stories from "../components/Stories";
import Post from "../components/Post";

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <Stories/>
      <Post/>
    </ScrollView>
  );
};

export default Home;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Stories/>

    </ScrollView>
  );
};

export default Home;

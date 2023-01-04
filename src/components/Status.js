import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import React, {useState, useEffect} from "react";

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;
  useEffect(() => {
    let timer = setTimeout(()=>{
        navigation.goBack()
    }, 5000)
    Animated.timing(progress, {
        toValue: 5,
        duration: 5000,
        useNativeDriver: false
    }).start();
    return ()=> clearTimeout(timer)
  }, [])
  
  const [progress, setProgress]= useState(new Animated.Value(0))
  const progressAnimation = progress.interpolate({
      inputRange: [0, 5],
      outputRange: ['0%', '100%']
  })
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: "95%",
          borderWidth: 1,
          backgroundColor: "gray",
          position: "absolute",
          top: 18,
        }}
      >
        <Animated.View
          style={{ height: "100%", backgroundColor: "white", width: progressAnimation }}
        ></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          top: 15,
          left: 0,
          position: "absolute",
          width: "90%",
        }}
      >
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 100,
            justifyContent: "center",
          }}
        >
          <Image
            source={image}
            style={{
              borderRadius: 100,
              width: "92%",
              height: "92%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", paddingLeft: 10, fontSize: 12 }}>
            {name}
          </Text>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Ionic name="close" style={{ color: "white", fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{ position: "absolute", width: "100%", height: 600 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginVertical: 10,
          width: '100%'
        }}
      >
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="white"
          style={{
            width: "85%",
            borderColor: "white",
            borderRadius: 25,
            height: 54,
            paddingLeft: 20,
            borderWidth: 1,
            color: "white",
            fontSize: 20,
          }}
        />
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Feather name="navigation" style={{fontSize: 30, color: 'white'}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;

import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const Stories = () => {
    const navigation = useNavigation();
  const stories = [
    {
      id: 1,
      name: "Your Story",
      image: require("../storage/userdp/cat-1.jpg"),
    },
    {
      id: 2,
      name: "Ruth Aidoo",
      image: require("../storage/userdp/cat-2.jpg"),
    },
    {
      id: 3,
      name: "Ped's Asamoah",
      image: require("../storage/userdp/cat-4.jpg"),
    },
    {
      id: 4,
      name: "Davida Lawson",
      image: require("../storage/userdp/offer-1.png"),
    },
    {
      id: 5,
      name: "Bryan Adams",
      image: require("../storage/userdp/cat-1.jpg"),
    },
    {
      id: 6,
      name: "Katie Brown",
      image: require("../storage/userdp/offer-2.png"),
    },
    {
      id: 7,
      name: "Michelle Gomez",
      image: require("../storage/userdp/person_2.jpg"),
    },
    {
      id: 8,
      name: "Your Story",
      image: require("../storage/userdp/person_3.jpg"),
    },
    {
      id: 9,
      name: "Jeff Antwi",
      image: require("../storage/userdp/person_4.jpg"),
    },
    {
      id: 10,
      name: "Roberto Jnr",
      image: require("../storage/userdp/product-2.jpg"),
    },
    {
      id: 11,
      name: "Kwasi Baako",
      image: require("../storage/userdp/product-3.jpg"),
    },
    {
      id: 12,
      name: "Brad Lee",
      image: require("../storage/userdp/product-4.jpg"),
    },
    {
      id: 13,
      name: "Lady Julie",
      image: require("../storage/userdp/product-5.jpg"),
    },
    {
      id: 13,
      name: "Asamoah Gyan",
      image: require("../storage/userdp/product-6.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {stories.map((data, index) => {
        return (
          <TouchableOpacity key={index} onPress={()=>{navigation.push('Status', {name: data.name, image: data.image})}}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 10,
                    zIndex: 1,
                    bottom: 15,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 24,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "white",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

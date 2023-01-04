import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

const Post = () => {
  const stories = [
    {
      id: 1,
      userName: "majesty",
      userImage: require("../storage/userdp/cat-1.jpg"),
      postImage: require("../storage/images/img_1.jpg"),
      postCaption: "We are learning and mastering React Native this year",
      likes: 456,
      isLiked: false,
    },
    {
      id: 2,
      userName: "spectrumghana",
      userImage: require("../storage/userdp/cat-1.jpg"),
      postImage: require("../storage/images/img_2.jpg"),
      postCaption: "Greetings from Spectrum Multimedia",
      likes: 500,
      isLiked: false,
    },
    {
      id: 3,
      userName: "kelvynbrown",
      userImage: require("../storage/userdp/cat-1.jpg"),
      postImage: require("../storage/images/img_4.jpg"),
      postCaption: "This is awesome bro!",
      likes: 5,
      isLiked: false,
    },
    {
      id: 4,
      userName: "peteraidoo",
      userImage: require("../storage/userdp/cat-1.jpg"),
      postImage: require("../storage/images/person_1.jpg"),
      postCaption: "Congratulations bro!",
      likes: 980,
      isLiked: false,
    },
    {
      id: 5,
      userName: "sweetaroma",
      userImage: require("../storage/userdp/cat-1.jpg"),
      postImage: require("../storage/images/person_5.jpg"),
      postCaption: "This is great",
      likes: 155,
      isLiked: false,
    },
  ];
  return (
    <View>
      {stories.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={data.postImage}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <Text
                  style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold" }}
                >
                  {data.userName}
                </Text>
              </View>
              <TouchableOpacity>
                <Feather name="more-vertical" style={{ fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      fontSize: 20,
                      paddingRight: 10,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

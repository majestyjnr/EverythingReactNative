import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Reels from "./src/screens/Reels";
import Shop from "./src/screens/Shop";
import Profile from "./src/screens/Profile";
import Activity from "./src/screens/Activity";
import Status from "./src/components/Status";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "ios-search-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Reels") {
              iconName = focused
                ? "ios-caret-forward-circle"
                : "ios-caret-forward-circle-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Shop") {
              iconName = focused ? "ios-cart" : "ios-cart-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Profile") {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
              size = focused ? size + 8 : size + 2;
            }
            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Instagram",
            headerRight: () => {
              return (
                <View style={styles.headericonsContainer}>
                  <TouchableOpacity>
                    <FontAwesome
                      name="plus-square-o"
                      style={styles.headericon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionic name="ios-heart-outline" style={styles.headericon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="navigation" style={styles.headericon} />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          options={{ headerShown: false }}
          component={BottomTabScreen}
        />
        <Stack.Screen
          name="Status"
          options={{ headerShown: false }}
          component={Status}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headericonsContainer: {
    fontSize: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 140,
  },
  headericon: {
    fontSize: 28,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

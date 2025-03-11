import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet,  TouchableOpacity } from "react-native";

import { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  CustomSplashScreen : undefined;
};

type CustomSplashScreenProps = NativeStackScreenProps<RootStackParamList, 'CustomSplashScreen'>;

const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({ navigation }: CustomSplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      ; // Hides the splash screen after a delay
    }, 5000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      {/* Custom Icon (Insert your path below) */}
      <Image
        source={require("./assets/tick.png")} // <-- Change this path
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>Attendance Marked!!</Text>

      {/* Bottom Navigation (Icons Placeholder) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          source={require("./assets/Home.png")} // <-- Change this path
          style={styles.navIcon}
        /></TouchableOpacity>
        <Image
          source={require("./assets/Attendance.png")} // <-- Change this path
          style={styles.navIcon}
        />
        <Image
          source={require("./assets/GraphReport.png")} // <-- Change this path
          style={styles.navIcon}
        />
      </View>
    </View>
  );
};

export default CustomSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#007BFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
});

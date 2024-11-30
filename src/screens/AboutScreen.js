import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { TouchableOpacity } from "react-native";

const EasterEggMessage = () => {
  alert("You found the Easter Egg!");
};

function AboutScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Lab5 App</Text>
        <TouchableOpacity style={styles.text} onPress={EasterEggMessage}>
          Ashton Kostiuk
        </TouchableOpacity>
        <Text style={styles.text}>
          Current Date: {new Date().toLocaleDateString()}
        </Text>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e2c2c",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "Bold",
    fontFamily: "sans-serif",
  },
});

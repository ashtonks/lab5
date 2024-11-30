import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Lab 5 - Ashton Kostiuk</Text>
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "white",
  },
});

export default MainLayout;

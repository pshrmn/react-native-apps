import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "@curi/react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    alignSelf: "stretch"
  },
  homeText: {
    fontSize: 35,
    color: "#444"
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.homeText}>Lit.</Text>
    <Link to="Profile">
      <Text>Profile</Text>
    </Link>
  </View>
);

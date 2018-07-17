import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "@curi/react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "orange",
    padding: 10
  },
  homeText: {
    fontSize: 50,
  },
  linkText: {
    fontSize: 30
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.homeText}>Lit.</Text>
    <Link to="Ideas">
      <Text style={styles.linkText}>Ideas</Text>
    </Link>
    <Link to="New Idea">
      <Text style={styles.linkText}>New Idea</Text>
    </Link>
    <Link to="Profile">
      <Text style={styles.linkText}>Profile</Text>
    </Link>
  </View>
);

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "@curi/react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "orange",
    paddingHorizontal: 10
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
    <Link to="Ideas" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>Ideas</Text>
    </Link>
    <Link to="New Idea" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>New Idea</Text>
    </Link>
    <Link to="Inspiration" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>Inspiration</Text>
    </Link>
    <Link to="Profile" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>Profile</Text>
    </Link>
  </View>
);

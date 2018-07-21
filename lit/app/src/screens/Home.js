import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "@curi/react-native";

import Title from "../components/Title";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 10
  },
  linkText: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: "#222"
  }
});

export default () => (
  <View style={styles.container}>
    <Title text="lit.erature" />
    <Link to="Ideas" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>ideas</Text>
    </Link>
    <Link to="New Idea" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>new idea</Text>
    </Link>
    <Link to="Inspiration" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>inspiration</Text>
    </Link>
    <Link to="Profile" anchor={TouchableOpacity}>
      <Text style={styles.linkText}>profile</Text>
    </Link>
  </View>
);

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import NewIdeaForm from "../components/NewIdeaForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold"
  }
});

export default ({ router }) => (
  <View style={styles.container}>
    <NewIdeaForm router={router} />
  </View>
);

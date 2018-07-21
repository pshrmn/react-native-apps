import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";
import NewIdeaForm from "../components/forms/NewIdeaForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default ({ router }) => (
  <View style={styles.container}>
    <Title text="new idea" />
    <NewIdeaForm router={router} />
  </View>
);

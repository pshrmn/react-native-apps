import React from "react";
import { View, Text, StyleSheet } from "react-native";

import NewIdeaForm from "../components/forms//NewIdeaForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "gold"
  }
});

export default ({ router }) => (
  <View style={styles.container}>
    <NewIdeaForm router={router} />
  </View>
);

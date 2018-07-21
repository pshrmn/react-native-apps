import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";
import EditIdeaForm from "../components/forms/EditIdeaForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default ({ router, response }) => (
  <View style={styles.container}>
    <Title text="edit idea" />
    <EditIdeaForm idea={response.params.id} router={router} />
  </View>
);

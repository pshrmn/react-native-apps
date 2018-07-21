import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EditIdeaForm from "../components/forms/EditIdeaForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "tomato"
  }
});

export default ({ router, response }) => (
  <View style={styles.container}>
    <EditIdeaForm idea={response.params.id} router={router} />
  </View>
);

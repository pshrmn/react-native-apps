import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ChangePasswordForm from "../components/forms/ChangePasswordForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  }
});

export default ({ router }) => (
  <View style={styles.container}>
    <ChangePasswordForm router={router} />
  </View>
);

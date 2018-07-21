import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ChangePasswordForm from "../components/forms/ChangePasswordForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingHorizontal: 10
  }
});

export default ({ router }) => (
  <View style={styles.container}>
    <ChangePasswordForm router={router} />
  </View>
);

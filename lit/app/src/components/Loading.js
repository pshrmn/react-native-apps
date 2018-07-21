import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  loadingText: {
    fontSize: 20
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

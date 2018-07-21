import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#222",
    alignSelf: "stretch",
    paddingHorizontal: 10
  },
  titleText: {
    fontSize: 50,
    color: "#fff"
  }
});

export default ({ text, background, color }) => (
  <View
    style={[
      styles.title,
      background ? { backgroundColor: background } : null
    ]}
  >
    <Text
      style={[
        styles.titleText,
        color ? { color } : null
      ]}
    >
      {text}
    </Text>
  </View>
);

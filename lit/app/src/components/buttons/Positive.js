import React from "react";
import { TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";

import buttonStyles from "./styles";

const styles = StyleSheet.create({
  opacity: {
    color: "mediumaquamarine"
  },
  highlight: {
    backgroundColor: "mediumaquamarine",
  }
});

export const PositiveOpacity = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[buttonStyles.button, styles.opacity]}
  >
    {children}
  </TouchableOpacity>
);

export const PositiveHighlight = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[buttonStyles.button, styles.highlight]}
    underlayColor="teal"
  >
    {children}
  </TouchableHighlight>
);

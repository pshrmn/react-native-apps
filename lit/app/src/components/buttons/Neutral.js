import React from "react";
import { TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";

import buttonStyles from "./styles";

const styles = StyleSheet.create({
  opacity: {

  },
  highlight: {
    backgroundColor: "#ccc",
  }
});

export const NeutralOpacity = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[buttonStyles.button, styles.opacity]}
  >
    {children}
  </TouchableOpacity>
);

export const NeutralHighlight = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[buttonStyles.button, styles.highlight]}
    underlayColor="#999"
  >
    {children}
  </TouchableHighlight>
);

import React from "react";
import { TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";

import buttonStyles from "./styles";

const styles = StyleSheet.create({
  opacity: {
    color: "tomato"
  },
  highlight: {
    backgroundColor: "tomato",
  }
});

export const NegativeOpacity = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[buttonStyles.button, styles.opacity]}
  >
    {children}
  </TouchableOpacity>
);

export const NegativeHighlight = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[buttonStyles.button, styles.highlight]}
    underlayColor="firebrick"
  >
    {children}
  </TouchableHighlight>
);

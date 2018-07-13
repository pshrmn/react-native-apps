import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  error: {

  },
  errorText: {
    color: "red"
  },
  textInput: {

  }
});

export default ({ error }) => error
  ? <View style={styles.error}>
      <Text style={styles.errorText}>
        {error}
      </Text>
    </View>
  : null;

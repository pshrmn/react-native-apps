import React from "react";
import { View, StatusBar, StyleSheet, Platform } from "react-native";
import { Constants } from "expo";

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: (Platform.OS === 'ios')
      ? 0
      : Constants.statusBarHeight
  }
});

export default () => (
  <View style={styles.headerStyle}>
    <StatusBar translucent={true} />
  </View>
)
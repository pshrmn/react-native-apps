import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const ScreenWithBackButton = ({ router, children }) => (
  <View>
    <View style={styles.header}>
      <TouchableHighlight
        onPress={() => {
          router.history.go(-1);
        }}
      >
        <Text style={styles.headerText}>&lt; Back</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.content}>
      { children }
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222233',
    padding: 5
  },
  headerText: {
    fontSize: 30,
    color: '#fff'
  },
  content: {
    backgroundColor: '#fff'
  }
});

export default ScreenWithBackButton;

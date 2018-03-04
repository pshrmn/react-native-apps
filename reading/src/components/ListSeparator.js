import React from 'react';
import { View, StyleSheet } from 'react-native';

const ListSeparator = () => (
  <View style={styles.container} />
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 10
  }
});

export default ListSeparator;

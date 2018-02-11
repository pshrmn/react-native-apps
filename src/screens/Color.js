import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  color: string,
};

const Color = (props:Props) => (
  <View style={[
    styles.color,
    { backgroundColor: props.color }
  ]}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{props.color}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  color: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50
  }
});

export default Color;

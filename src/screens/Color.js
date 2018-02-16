import React from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

type Props = {
  color: string,
  opacityStyle: object
};

const Color = (props:Props) => (
  <View style={[
    styles.color,
    { backgroundColor: props.color }
  ]}>
    <Animated.View style={[
      styles.textContainer,
      props.opacityStyle
    ]}>
      <Text style={styles.text}>{props.color}</Text>
    </Animated.View>
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

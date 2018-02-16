import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

type Props = {
  type: string,
  value: number,
  range: Array<number>,
  primaryColor: string,
  secondaryColor: string,
  change: () => void
};

const ValueSlider = (props:Props) => (
  <View>
    <Text
      style={[
        styles.controlText,
        { color: props.primaryColor }
      ]}
    >
      {props.type}
    </Text>
    <Slider
      style={styles.slider}
      minimumValue={props.range[0]}
      maximumValue={props.range[1]}
      minimumTrackTintColor={props.primaryColor}
      maximumTrackTintColor={props.secondaryColor}
      thumbTintColor={props.primaryColor}
      value={props.value}
      onValueChange={props.change}
    />
  </View>
);

const styles = StyleSheet.create({
  controlText: {
    fontSize: 30
  },
  slider: {
    width: 400,
    paddingVertical: 15
  }
})

export default ValueSlider;

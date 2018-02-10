import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const ControlButton = ({ text, onPress, icon }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.controlButton}
  >
    <View style={styles.buttonInner}>
      { icon ? <EvilIcon style={styles.icon} name={icon} /> : null }
      <Text style={styles.controlButtonText}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  controlButton: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#CCC',
    borderRadius: 5
  },
  buttonInner: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  controlButtonText: {
    fontSize: 15,
    color: '#222233',
    textAlign: 'center'
  },
  icon: {
    fontSize: 25
  }
});

export default ControlButton;

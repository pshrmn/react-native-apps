import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const ScreenWithBackButton = ({
  router,
  backText = 'Back',
  headline,
  children
}) => (
  <View style={styles.screen}>
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableHighlight
          onPress={() => {
            router.history.go(-1);
          }}
        >
          <View style={styles.backView}>
            <EvilIcon style={styles.icon} name='arrow-left' />
            <Text style={styles.backText}>{backText}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.center}>
        {headline && <Text style={styles.headlineText}>{headline}</Text>}
      </View>
      <View style={styles.right}>
      </View>
    </View>
    <View style={styles.content}>
      { children }
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    backgroundColor: '#222233',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  right: {
    flex: 1
  },
  center: {
    flex: 2
  },
  left: {
    flex: 1
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backText: {
    fontSize: 30,
    color: '#fff'
  },
  content: {
    backgroundColor: '#fff',
    flex: 2
  },
  icon: {
    fontSize: 40,
    color: '#fff'
  },
  headlineText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center'
  }
});

export default ScreenWithBackButton;

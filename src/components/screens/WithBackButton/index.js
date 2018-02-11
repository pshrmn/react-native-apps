import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';

const ScreenWithBackButton = ({
  router,
  backText = 'Back',
  headline,
  children
}) => (
  <View style={styles.screen}>
    <Header
      router={router}
      backText={backText}
      headline={headline}
    />
    <View style={styles.content}>
      { children }
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  content: {
    backgroundColor: '#fff',
    flex: 2
  }
});

export default ScreenWithBackButton;

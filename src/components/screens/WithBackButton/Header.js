import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const Header = ({
  router,
  backText = 'Back',
  headline
}) => (
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
);

const styles = StyleSheet.create({
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

export default Header;

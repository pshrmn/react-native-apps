import React from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { Link } from '@curi/react-native';
import { Toolbar, ToolbarContent, ToolbarBackAction } from 'react-native-paper';

import AddBook from '../components/forms/AddBook';

const StartReading = ({ router }) => (
  <View style={styles.container}>
    <Toolbar>
      <ToolbarBackAction
        dark={true}
        onPress={() => {
          router.history.go(-1);
        }}
      />
      <ToolbarContent
        title="Add a Book"
      />
    </Toolbar>
    <AddBook />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default StartReading;

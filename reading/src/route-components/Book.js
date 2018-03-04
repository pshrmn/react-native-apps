import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Toolbar, ToolbarContent, ToolbarBackAction } from 'react-native-paper';

import RemoveBookButton from '../components/buttons/RemoveBookButton';
import FinishBookButton from '../components/buttons/FinishBookButton';

const Book = ({ router, book = {}}) => (
  <View style={styles.container}>
    <Toolbar>
      <ToolbarBackAction
        dark={true}
        onPress={() => {
          router.history.go(-1);
        }}
      />
    </Toolbar>
    <View>
      <Text style={styles.title}>
        {book.title}
      </Text>
      <Text style={styles.author}>
        {book.author}
      </Text>
    </View>
    <View style={styles.controls}>
      {
        book.finished
          ? null
          : <FinishBookButton id={book.id} />
      }
      <RemoveBookButton id={book.id} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30
  },
  author: {
    fontSize: 20
  },
  controls: {
    marginRight: 15
  }
});

export default connect(
  (state, ownProps) => {
    const { id } = ownProps.response.params;
    const book = state.books.find(b => b.id === id);
    return { book };
  }
)(Book);

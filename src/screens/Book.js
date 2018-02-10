import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import RemoveBookButton from '../components/buttons/RemoveBookButton';
import FinishBookButton from '../components/buttons/FinishBookButton';

const Book = ({ router, book }) => (
  <ScreenWithBackButton router={router}>
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
  </ScreenWithBackButton>
)

const styles = StyleSheet.create({
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

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ScreenWithBackButton from '../components/ScreenWithBackButton';

const Book = ({ router, book }) => (
  <ScreenWithBackButton router={router}>
    <Text style={styles.title}>
      {book.title}
    </Text>
    <Text style={styles.author}>
      {book.author}
    </Text>
  </ScreenWithBackButton>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  author: {
    fontSize: 20
  }
});

export default connect(
  (state, ownProps) => {
    const { id } = ownProps.response.params;
    const book = state.books.find(b => b.id === id);
    return { book };
  }
)(Book);

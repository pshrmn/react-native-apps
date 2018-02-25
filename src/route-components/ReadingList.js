import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Link } from '@curi/react-native';

import { ScreenWithBackButton } from '../components/screens';
import BookListItem from '../components/BookListItem';
import ResetReadingList from '../components/buttons/ResetReadingList';
import ListSeparator from '../components/ListSeparator';

const ReadingList = ({ router, books }) => (
  <ScreenWithBackButton
    router={router}
    headline='Reading List'
  >
    <View style={styles.list}>
      <View style={styles.controls}>
        <Link to='Start Reading' style={styles.button}>
          <Text style={styles.buttonText}>Start A Book</Text>
        </Link>
        <ResetReadingList />
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookListItem {...item} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ListSeparator}
      />
    </View>
  </ScreenWithBackButton>
);

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  list: {
  },
  button: {
    backgroundColor: '#009166',
    padding: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
});

export default connect(
  state => ({
    books: state.books
  })
)(ReadingList);

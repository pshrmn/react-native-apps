import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Link } from '@curi/react-native';

import { ScreenWithBackButton } from '../components/screens';
import BookListItem from '../components/BookListItem';
import ResetReadingList from '../components/buttons/ResetReadingList';
import StartABook from '../components/buttons/StartABook';
import ListSeparator from '../components/ListSeparator';

const ReadingList = ({ router, books }) => (
  <ScreenWithBackButton
    router={router}
    headline='Reading List'
  >
    <View style={styles.list}>
      <View style={styles.controls}>
        <StartABook />
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
  }
});

export default connect(
  state => ({
    books: state.books
  })
)(ReadingList);

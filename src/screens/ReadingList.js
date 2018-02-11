import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

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
    alignItems: 'flex-end'
  },
  list: {
  }
});

export default connect(
  state => ({
    books: state.books
  })
)(ReadingList);

import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import BookListItem from '../components/BookListItem';
import ResetReadingList from '../components/buttons/ResetReadingList';
import ListSeparator from '../components/ListSeparator';

const ReadingList = ({ router, books }) => (
  <ScreenWithBackButton router={router}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Reading List</Text>
    </View>
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
  header: {
    alignItems: 'center',
    marginVertical: 25
  },
  headerText: {
    color: '#222233',
    fontSize: 50
  },
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

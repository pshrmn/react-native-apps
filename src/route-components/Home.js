import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Link } from '@curi/react-native';
import { Toolbar, ToolbarContent, ToolbarBackAction, FAB } from 'react-native-paper';

import BookListItem from '../components/BookListItem';
import ResetReadingList from '../components/buttons/ResetReadingList';
import StartABook from '../components/buttons/StartABook';
import ListSeparator from '../components/ListSeparator';

const Home = ({ router, books }) => (
  <View style={styles.container}>
    <Toolbar>
      <ToolbarContent
        title="Reading Tracker"
      />
    </Toolbar>
    <View style={styles.list}>
      <View style={styles.listContainer}>
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <BookListItem {...item} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>
      <View
        style={styles.float}
      >
        <StartABook router={router}/>
        <ResetReadingList />
      </View>
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 5
  },
  float: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    flexDirection: 'row'
  }
});

export default connect(
  state => ({
    books: state.books
  })
)(Home);

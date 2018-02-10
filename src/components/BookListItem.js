import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const BookListItem = ({ title, author, started }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.author}>
      by {author}
    </Text>
    <Text style={styles.info}>
      Started on {moment(started).format('MMM DD, YYYY')}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 30,
    color: '#222233'
  },
  author: {
    fontSize: 25,
    color: '#222233'
  },
  info: {
    fontSize: 20,
    color: '#222233'
  }
});

export default BookListItem;

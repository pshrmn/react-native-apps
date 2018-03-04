import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import { Link } from '@curi/react-native';
import { Paper } from 'react-native-paper';

import genres from '../constants/genres';

class BookListItem extends React.Component {
  render() {
    const { id, title, author, genre, started, finished } = this.props;

    const {
      color = '#ccc',
      textColor = '#000'
    } = genres.find(g => g.name === genre)

    return (
      <Paper style={{ flex: 1, elevation: 4 }}>
        <Link
          to='Book'
          params={{ id }}
        >
          <View style={styles.container}>
            <View style={styles.left}>
              <Text style={styles.title}>
                {title}
              </Text>
              <Text style={styles.author}>
                by {author}
              </Text>
              <Text style={styles.dateText}>
                {moment(started).format('MMM DD, YYYY')}
                {' - '}
                {finished && moment(finished).format('MMM DD, YYYY')}
              </Text>
            </View>
            <View style={styles.right}>
              <View
                style={{ backgroundColor: color, height: 150 }}
              />
            </View>
          </View>
        </Link>
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    flex: 4,
    paddingLeft: 15
  },
  right: {
    flex: 1
  },
  genreCard: {
    width: 25,
    marginRight: 10
  },
  title: {
    fontSize: 30,
    color: '#222233'
  },
  author: {
    fontSize: 25,
    color: '#222233'
  },
  dateText: {
    fontSize: 20,
    color: '#222233'
  }
});

export default BookListItem;

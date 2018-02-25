import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import { Link } from '@curi/react-native';

import genres from '../constants/genres';

class BookListItem extends React.Component {
  render() {
    const { id, title, author, genre, started, finished } = this.props;

    const {
      color:backgroundColor = '#ccc',
      textColor = '#000'
    } = genres.find(g => g.name === genre)

    const textStyle = {
      color: textColor
    };

    return (
      <Link
        to='Book'
        params={{ id }}
      >
        <View
          style={[
            styles.container,
            { backgroundColor }
          ]}
        >
          <View style={styles.left}>
            <Text style={[styles.title, textStyle]}>
              {title}
            </Text>
            <Text style={[styles.author, textStyle]}>
              by {author}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={[styles.dateText, textStyle]}>
              {moment(started).format('MMM DD, YYYY')}
              {' - '}
              {finished && moment(finished).format('MMM DD, YYYY')}
            </Text>
          </View>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    flex: 2,
    paddingLeft: 15
  },
  right: {
    flex: 1,
    paddingRight: 15
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
    textAlign: 'right',
    fontSize: 20,
    color: '#222233'
  }
});

export default BookListItem;

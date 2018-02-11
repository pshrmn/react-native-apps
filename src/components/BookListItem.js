import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import { Link } from '@curi/react-native';

import genres from '../constants/genres';

function genreColor(genre) {
  const obj = genres.find(g => g.name === genre);
  return obj
    ? obj.color
    : '#ccc';
}

class BookListItem extends React.Component {
  render() {
    const { id, title, author, genre, started, finished } = this.props;
    return (
      <Link
        to='Book'
        params={{ id }}
      >
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={[
              styles.genreCard,
              { backgroundColor: genreColor(genre) }
            ]} />
            <View>
              <Text style={styles.title}>
                {title}
              </Text>
              <Text style={styles.author}>
                by {author}
              </Text>
              <Text style={styles.info}>
                {moment(started).format('MMM DD, YYYY')}
                {' - '}
                {finished && moment(finished).format('MMM DD, YYYY')}
              </Text>
            </View>
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
  genreCard: {
    width: 25,
    marginRight: 10
  },
  infoContainer: {
    flexDirection: 'row'
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

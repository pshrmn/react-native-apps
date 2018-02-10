import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import genres from '../constants/genres';
import { finishBook, removeBook } from '../store/actions';

function genreColor(genre) {
  const obj = genres.find(g => g.id === genre);
  return obj
    ? obj.color
    : '#ccc';
}

const ControlButton = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.controlButton}
  >
    <Text style={styles.controlButtonText}>{children}</Text>
  </TouchableHighlight>
)

class BookListItem extends React.Component {
  
  finishBook = () => {
    this.props.finishBook(this.props.id);
  }

  removeBook = () => {
    Alert.alert(
      'Remove Book',
      'Are you certain you want to remove this book?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Confirm',
          onPress: () => {
            this.props.removeBook(this.props.id);
          }
        }
      ]
    );
  }

  render() {
    const { title, author, genre, started, finished } = this.props;
    return (
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
        <View style={styles.controls}>
          {
            finished
              ? null
              : <ControlButton onPress={this.finishBook}>
                  Finish
                </ControlButton>
          }
          <ControlButton onPress={this.removeBook}>
            Remove
          </ControlButton>
        </View>
      </View>
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
  },
  controls: {
    marginRight: 15
  },
  controlButton: {
    padding: 5,
    backgroundColor: '#CCC',
    borderRadius: 5
  },
  controlButtonText: {
    fontSize: 15,
    color: '#222233',
    textAlign: 'center'
  }
});

export default connect(
  null,
  {
    finishBook,
    removeBook
  }
)(BookListItem);

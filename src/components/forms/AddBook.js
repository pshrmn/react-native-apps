import React from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { Link } from '@curi/react-native';
import { connect } from 'react-redux';

import { addBook } from '../../store/actions';
import genres from '../../constants/genres';

const Error = ({ error }) => (
  error
    ? <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    : null
);

class AddBook extends React.Component {

  state = { title: '', genre: 'fiction', error: undefined };

  handleTitle = (title) => {
    this.setState({
      title,
      error: title !== '' ? undefined: "You must provide a book title"
    });
  }

  handleGenre = (genre) => {
    this.setState({ genre });
  }

  verifyAndSubmitData() {
    if (this.state.title !== '') {
      this.props.addBook({
        id: Math.floor(Math.random() * 10000),
        title: this.state.title,
        started: new Date(),
        finished: undefined
      });
      return true;
    }
    this.setState({
      error: "You must provide a book title"
    })
    return false;
  }

  render() {
    const { router } = this.props;
    const { title, genre, error } = this.state;
    return  (
      <View>
        <Error error={error} />
        <View style={styles.container}>
          <Text style={styles.header}>Start Reading A Book</Text>
          <View>
            <Text>Title</Text>
            <TextInput value={title} onChangeText={this.handleTitle} />
          </View>
          <View>
            <Text>Genre</Text>
            <Picker selectedValue={genre} onValueChange={this.handleGenre}>
              {
                genres.map(g => (
                  <Picker.Item
                    key={g.name}
                    label={g.name}
                    value={g.name}
                  />
                ))
              }
            </Picker>
          </View>
          <Link
            to="Reading List"
            style={styles.button}
            method="replace"
            onPress={event => {
              const ok = this.verifyAndSubmitData();
              if (!ok) {
                event.preventDefault();
              }
            }}
          >
            <Text style={styles.buttonText}>Start Book</Text>
          </Link>
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    fontSize: 25
  },
  error: {
    backgroundColor: '#f00',
    padding: 5
  },
  errorText: {
    color: '#fff',
    fontSize: 15
  },
  button: {
    backgroundColor: '#222233',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
});

export default connect(
  null,
  { addBook }
)(AddBook);

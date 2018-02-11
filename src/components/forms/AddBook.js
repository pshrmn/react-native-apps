import React from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { Link } from '@curi/react-native';
import { connect } from 'react-redux';

import { addBook } from '../../store/actions';
import genres from '../../constants/genres';
import DatePicker from './Date';

const Error = ({ errors }) => {
  const errs = Object.keys(errors)
    .map(key => errors[key])
    .filter(e => e !== undefined);

  if (!errs.length) {
    return null;
  }
  return (
    <View style={styles.error}>
      {
        errs.map((e,i) => (
          <Text
            key={i}
            style={styles.errorText}
          >
            {e}
          </Text>
        ))
      }
    </View>
  );
};

class AddBook extends React.Component {

  state = {
    title: '',
    author: '',
    genre: 'fiction',
    started: new Date(),
    errors: {}
  };

  handleTitle = (title) => {
    this.setState(prevState => {
      let errors = {
        ...prevState.errors,
        title: title !== ''
          ? undefined
          : "You must provide a book title"
      };
      return { title, errors };
    });
  }

  handleAuthor = author => {
    this.setState(prevState => {
      let errors = {
        ...prevState.errors,
        author: author !== ''
          ? undefined
          : "You must provide an author"
      };
      return { author, errors };
    });
  }

  handleGenre = (genre) => {
    this.setState({ genre });
  }

  handleStarted = started => {
    this.setState({ started });
  }

  verifyAndSubmitData() {
    const validAuthor = this.state.author !== '';
    const validTitle = this.state.title !== '';

    if (validTitle && validAuthor) {
      this.props.addBook({
        id: Math.random().toString(36).slice(2,8),
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        started: this.state.started,
        finished: undefined
      });
      return true;
    }
    const errors = {};
    if (!validAuthor) {
      errors.author = "You must provide an author";
    }
    if (!validTitle) {
      errors.title = "You must provide a book title";
    }
    this.setState({ errors });
    return false;
  }

  render() {
    const { router } = this.props;
    const { title, author, genre, errors } = this.state;
    return  (
      <View>
        <Error errors={errors} />
        <View style={styles.container}>
          <View>
            <Text>Title</Text>
            <TextInput value={title} onChangeText={this.handleTitle} />
          </View>
          <View>
            <Text>Author</Text>
            <TextInput value={author} onChangeText={this.handleAuthor} />
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
          <View>
            <Text>Date Started</Text>
            <DatePicker date={this.state.started} update={this.handleStarted} />
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

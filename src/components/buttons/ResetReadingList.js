import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

import { clearBooks } from '../../store/actions';

class ResetReadingList extends React.Component {
  handlePress = () => {
    Alert.alert(
      'Clear books',
      'Are you sure you want to clear your books?',
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.clearBooks();
          }
        }
      ]
    )
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.handlePress}
      >
        <Text style={styles.text}>Reset Books</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d90000',
    padding: 5
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
})

export default connect(
  null,
  { clearBooks }
)(ResetReadingList);

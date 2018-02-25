import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { Link } from '@curi/react-native';

const StartABook = () => (
  <Link to='Start Reading' style={styles.button}>
    <Text style={styles.buttonText}>Start A Book</Text>
  </Link>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#009166',
    padding: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
});

export default StartABook;

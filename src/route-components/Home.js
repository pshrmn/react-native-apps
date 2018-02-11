import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@curi/react-native';

const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Reading Tracker</Text>
    </View>
    <Link to='Start Reading' style={styles.button}>
      <Text style={styles.buttonText}>Start A Book</Text>
    </Link>
    <Link to='Reading List' style={styles.button}>
      <Text style={styles.buttonText}>Reading List</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222233',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginVertical: 25
  },
  headerText: {
    color: '#fff',
    fontSize: 50
  },
  button: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#222233',
    padding: 10,
    marginVertical: 5
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'
  }
});

export default Home;

import React from 'react';
import { Link } from '@curi/react-native';
import { FAB } from 'react-native-paper';

const StartABook = ({ router }) => (
  <Link
    to='Start Reading'
    anchor={FAB}
    icon="add"
    style={{ marginRight: 5, backgroundColor: '#009166' }}
  />
);

export default StartABook;

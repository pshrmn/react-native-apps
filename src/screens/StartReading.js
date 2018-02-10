import React from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { Link } from '@curi/react-native';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import AddBook from '../components/forms/AddBook';

const StartReading = ({ router }) => (
  <ScreenWithBackButton router={router} backText='Cancel' headline='Add A Book'>
    <AddBook />
  </ScreenWithBackButton>
);

export default StartReading;

import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Container from './components/Container';

export default function({ response, router }) {
  if (!response) {
    return <Text>Loading...</Text>
  }
  const { body:Body } = response;
  return (
    <Container>
      <StatusBar backgroundColor="#222233" />
      <Body response={response} router={router} />
    </Container>
  )
}

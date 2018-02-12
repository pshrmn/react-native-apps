/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import color from 'color';

import ColorScreen from './screens/Color';
import Swiper from './screens/Swiper';
import randomColor from './utility/randomColor';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Swiper>
        <ColorScreen color={randomColor()} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;

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

  state = {
    colors: [
      randomColor(),
      randomColor()
    ]
  }

  handleSwipe = () => {
    this.setState((prevState) => {
      const newColors = [
        ...prevState.colors.slice(1),
        randomColor()
      ];
      return {
        colors: newColors
      };
    })
  }

  render() {
    const [foregroundColor, backgroundColor] = this.state.colors;
    const foreground = <ColorScreen color={foregroundColor} />;
    const background = <ColorScreen color={backgroundColor} />;

    return (
      <Swiper
        onLeave={this.handleSwipe}
        foreground={foreground}
        background={background}
      />
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;

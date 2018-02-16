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
    foregroundColor: randomColor(),
    backgroundColor: randomColor()
  }

  handleSwipe = () => {
    this.setState((prevState) => {
      return {
        foregroundColor: prevState.backgroundColor,
        backgroundColor: randomColor()
      };
    });
  }

  updateColor = newColor => {
    this.setState(() => {
      return {
        foregroundColor: newColor,
      };
    });
  }

  render() {
    const { foregroundColor, backgroundColor } = this.state;
    const background = <ColorScreen color={backgroundColor} />;

    return (
      <Swiper
        onLeave={this.handleSwipe}
        style={{ backgroundColor }}
      >
        <ColorScreen color={foregroundColor} update={this.updateColor} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;

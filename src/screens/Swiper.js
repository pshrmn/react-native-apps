import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

type Props = {
  children: any
};

class Swiper extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.pan = new Animated.ValueXY();
    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.pan, {
          toValue: { x: 0, y: 0},
          friction: 4.5
        }).start()
      }
    })
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
      ]
    };

    return (
      <Animated.View
        style={[styles.container, animatedStyle]}
        {...this.responder.panHandlers}
      >
      
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Swiper;

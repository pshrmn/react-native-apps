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

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

class Swiper extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.pan = new Animated.Value(0);
    this.scale = new Animated.Value(1);

    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderStart: () => {
        Animated.timing(this.scale, {
          toValue: 0.75
        }).start();
      },
      onPanResponderMove: (event, gesture) => {
        this.pan.setValue(gesture.dx);
      },
      onPanResponderRelease: (e, gesture) => {
        const { vx } = gesture;
        Animated.sequence([
          // stop
          Animated.decay(this.pan, {
            velocity: vx,
            deceleration: 0.99
          }),
          Animated.parallel([
            // move back
            Animated.timing(this.pan, {
              toValue: 0,
              friction: 10
            }),
            // scale back
            Animated.timing(this.scale, {
              toValue: 1
            })
          ]),
        ]).start();
      }
    })
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateX: this.pan },
        { scale: this.scale }
      ]
    };

    return (
      <Animated.View
        {...this.responder.panHandlers}
        style={[styles.container]}
      >
        <Animated.View
          style={[styles.container, animatedStyle]}
        >
          {this.props.children}
        </Animated.View>
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

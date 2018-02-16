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

const TRIGGER_POINT = 0.15;

class Swiper extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.pan = new Animated.Value(0);

    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.pan.setValue(gesture.dx);
      },
      onPanResponderStart: () => {
        if (this.leavingAnimation) {
          this.leavingAnimation.stop();
        }
      },
      onPanResponderRelease: (e, gesture) => {
        const { dx, vx } = gesture;
        const { width } = Dimensions.get('window');

        const distance = Math.abs(dx);
        const direction = dx / distance;

        const velocity = Math.abs(vx);
        const velocityDirection = vx / velocity;

        const isLeaving = (distance / width > TRIGGER_POINT || Math.abs(vx) > 3) &&
          !(velocityDirection !== direction && velocity > 0.5);
        if (isLeaving) {
          // animate off the screen, then swap colors
          this.leavingAnimation = Animated.timing(this.pan, {
            toValue: direction * width
          }).start(() => {
            this.props.onLeave();
            this.pan.setValue(0);
          });
        } else {
          Animated.sequence([
            // stop
            Animated.decay(this.pan, {
              velocity: vx,
              deceleration: 0.99
            }),
            // move back
            Animated.timing(this.pan, {
              toValue: 0,
              friction: 10
            }),
          ]).start();

        }
      }
    })
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateX: this.pan }
      ]
    };
    return (
      <View
        {...this.responder.panHandlers}
        style={[styles.container, this.props.style]}
      >
        <Animated.View
          style={[styles.foreground, animatedStyle]}
        >
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foreground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    flex: 1
  }
})

export default Swiper;

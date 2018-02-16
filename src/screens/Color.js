import React from 'react';
import { View, Animated, Text, Slider, StyleSheet } from 'react-native';
import color from 'color';

type Props = {
  color: string,
  opacityStyle: object
};

class Color extends React.Component<Props> {
  constructor(props) {
    super(props);

    const originalColor = color(this.props.color);

    this.state = {
      color: originalColor,
      saturation: originalColor.saturationl()
    };
  }

  changeSaturation = saturation => {
    this.setState({ saturation });
  }

  componentWillReceiveProps(nextProps) {
    const newColor = color(nextProps.color);
    this.setState({
      color: newColor,
      saturation: newColor.saturationl()
    });
  }

  render() {
    const color = this.state.color.saturationl(this.state.saturation).rgb().string();
    const textColor = this.state.color.isDark() ? '#fff' : '#000';
    const trackBackground = this.state.color.isDark() ? '#ccc' : undefined;
    return (
      <View style={[
        styles.color,
        { backgroundColor: color }
      ]}>
        <View style={styles.innerContent}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                { color: textColor }
              ]}
            >{color}</Text>
          </View>
          <Animated.View style={[
            styles.controls,
            this.props.opacityStyle
          ]}>
            <Text
              style={[
                styles.controlText,
                { color: textColor }
              ]}
            >
              Saturation
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={textColor}
              maximumTrackTintColor={trackBackground}
              thumbTintColor={textColor}
              value={this.state.saturation}
              onValueChange={this.changeSaturation}
            />
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {},
  text: {
    fontSize: 50
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  controlText: {
    fontSize: 30
  },
  slider: {
    width: 400,
    paddingVertical: 10
  }
});

export default Color;

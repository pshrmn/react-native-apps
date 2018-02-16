import React from 'react';
import { View, Animated, TouchableOpacity, Text, Slider, StyleSheet } from 'react-native';
import colorFactory from 'color';

type Props = {
  color: string,
  opacityStyle: object
};

const colorFns = ['hex', 'rgb', 'hsl']

class Color extends React.Component<Props> {
  constructor(props) {
    super(props);

    const originalColor = colorFactory(this.props.color);

    this.state = {
      color: originalColor,
      hue: originalColor.hue(),
      saturation: originalColor.saturationl(),
      lightness: originalColor.lightness(),
      colorFnIndex: 0
    };
  }

  changeHue = hue => {
    this.setState({ hue });
  }

  changeSaturation = saturation => {
    this.setState({ saturation });
  }

  changeLightness = lightness => {
    this.setState({ lightness });
  }

  swapColorFnIndex = () => {
    this.setState(prevState => {
      const newIndex = (prevState.colorFnIndex+1) % colorFns.length;
      return {
        colorFnIndex: newIndex
      };
    })
  }

  componentWillReceiveProps(nextProps) {
    const newColor = colorFactory(nextProps.color);
    this.setState({
      color: newColor,
      hue: newColor.hue(),
      saturation: newColor.saturationl(),
      lightness: newColor.lightness()
    });
  }

  render() {
    const color = this.state.color
      .hue(this.state.hue)
      .saturationl(this.state.saturation)
      .lightness(this.state.lightness)
    let colorString = color[colorFns[this.state.colorFnIndex]]();
    if (colorString instanceof colorFactory) {
      colorString = colorString.round().string()
    }
    const textColor = color.isDark() ? '#fff' : '#000';
    const trackBackground = color.isDark() ? '#ccc' : undefined;
    return (
      <View style={[
        styles.color,
        { backgroundColor: colorString }
      ]}>
        <View style={styles.innerContent}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={this.swapColorFnIndex}>
              <Text
                style={[
                  styles.text,
                  { color: textColor }
                ]}
              >{colorString}</Text>
            </TouchableOpacity>
          </View>
          <Animated.View style={[
            styles.controls,
            this.props.opacityStyle
          ]}>
            <View>
              <Text
                style={[
                  styles.controlText,
                  { color: textColor }
                ]}
              >
                Hue
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={360}
                minimumTrackTintColor={textColor}
                maximumTrackTintColor={trackBackground}
                thumbTintColor={textColor}
                value={this.state.hue}
                onValueChange={this.changeHue}
              />
            </View>
            <View>
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
            </View>
            <View>
              <Text
                style={[
                  styles.controlText,
                  { color: textColor }
                ]}
              >
                Lightness
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={textColor}
                maximumTrackTintColor={trackBackground}
                thumbTintColor={textColor}
                value={this.state.lightness}
                onValueChange={this.changeLightness}
              />
            </View>
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

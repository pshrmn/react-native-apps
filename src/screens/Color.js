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
      hue: originalColor.hue(),
      saturation: originalColor.saturationl(),
      lightness: originalColor.lightness()
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

  componentWillReceiveProps(nextProps) {
    const newColor = color(nextProps.color);
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
    const colorString = color.rgb().string();
    const textColor = color.isDark() ? '#fff' : '#000';
    const trackBackground = color.isDark() ? '#ccc' : undefined;
    return (
      <View style={[
        styles.color,
        { backgroundColor: colorString }
      ]}>
        <View style={styles.innerContent}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                { color: textColor }
              ]}
            >{colorString}</Text>
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

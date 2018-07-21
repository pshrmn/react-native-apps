import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 200,
    textAlignVertical: "top"
  }
})

export default class NamedTextField extends React.PureComponent {
  changeText = text => {
    this.props.onChange(text);
  }

  render() {
    const { name, value, titleStyle, textStyle, ...rest } = this.props;
    return (
      <View>
        <View>
          <Text style={[styles.name, titleStyle]}>
            {name}
          </Text>
        </View>
        <TextInput
          style={[styles.textInput, textStyle]}
          value={value}
          onChangeText={this.changeText}
          autoCapitalize="none"
          editable={true}
          multiline={true}
          {...rest}
        />
      </View>
    )
  }
}

import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {

  }
})

export default class TextFieldWithError extends React.PureComponent {
  changeText = text => {
    this.props.onChange(text);
  }

  render() {
    const { name, value, ...rest } = this.props;
    return (
      <View>
        <View>
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={this.changeText}
          autoCapitalize="none"
          {...rest}
        />
      </View>
    )
  }
}

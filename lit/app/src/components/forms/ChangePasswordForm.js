import React from "react";
import { View, KeyboardAvoidingView, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";

import NamedTextField from "../NamedTextField";
import Error from "../Error";
import { CHANGE_PASSWORD_MUTATION } from "../../gql/mutations";

const styles = StyleSheet.create({
  textField: {
    fontSize: 30
  },
  titleField: {
    fontSize: 30
  },
  button: {
    marginVertical: 10,
    backgroundColor: "mediumaquamarine",
    padding: 5
  },
  cancelButton: {
    backgroundColor: "tomato"
  },
  buttonText: {
    fontSize: 20
  }
});

class ChangePasswordForm extends React.Component {
  state = {
    values: {
      oldPassword: "",
      newPassword: ""
    },
    error: false
  };

  updateValue = (key, value) => {
    this.setState(prevState => {
      return {
        values: {
          ...prevState.values,
          [key]: value
        }
      };
    })
  }

  changePassword = async () => {
    this.setState({ error: false });
    const response = await this.props.changePassword({
      variables: this.state.values
    });
    const { success } = response.data.changePassword;
    if (success) {
      this.props.router.history.go(-1);
    } else {
      this.setState({
        error: true
      });
    }
  }

  cancel = () => {
    this.props.router.history.go(-1); 
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <Error error={this.state.error ? "Invalid Entry" : null} />
        <NamedTextField
          name="Current Password"
          value={this.state.values.oldPassword}
          secureTextEntry={true}
          onChange={value => {
            this.updateValue("oldPassword", value);
          }}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <NamedTextField
          name="New Password"
          value={this.state.values.newPassword}
          secureTextEntry={true}
          onChange={value => {
            this.updateValue("newPassword", value);
          }}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <View>
          <TouchableHighlight
            underlayColor="teal"
            onPress={this.changePassword}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Change Password
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.cancel}
            style={[styles.button, styles.cancelButton]}
            underlayColor="firebrick"
          >
            <Text style={styles.buttonText}>
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default props => (
  <Mutation mutation={CHANGE_PASSWORD_MUTATION}>
    {(changePassword, { data }) => (
      <ChangePasswordForm {...props} changePassword={changePassword} changePasswordData={data}/>
    )}
  </Mutation>
);

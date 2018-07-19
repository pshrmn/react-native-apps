import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";

import NamedTextField from "../NamedTextField";
import Error from "../Error";
import { CHANGE_PASSWORD_MUTATION } from "../../gql/mutations";

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
      <View>
        <Error error={this.state.error ? "Invalid Entry" : null} />
        <NamedTextField
          name="Current Password"
          value={this.state.values.oldPassword}
          secureTextEntry={true}
          onChange={value => {
            this.updateValue("oldPassword", value);
          }}
        />
        <NamedTextField
          name="New Password"
          value={this.state.values.newPassword}
          secureTextEntry={true}
          onChange={value => {
            this.updateValue("newPassword", value);
          }}
        />
        <View>
          <Button
            title="Change Password"
            onPress={this.changePassword}
          />
          <Button
            title="Cancel"
            onPress={this.cancel}
          />
        </View>
      </View>
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

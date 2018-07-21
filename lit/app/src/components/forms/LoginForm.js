import React from "react";
import { View, KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";
import { Link } from "@curi/react-native";

import NamedTextField from "../NamedTextField";
import Error from "../Error";
import { PositiveHighlight, NeutralOpacity } from "../buttons";
import { LOGIN_MUTATION } from "../../gql/mutations";
import { login } from "../../auth";

const styles = StyleSheet.create({
  textField: {
    fontSize: 30
  },
  titleField: {
    fontSize: 30
  },
  buttonText: {
    fontSize: 20
  }
});

class LoginForm extends React.Component {
  state = {
    values: {
      name: "",
      email: "",
      password: ""
    },
    error: undefined
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

  login = async () => {
    const response = await this.props.login({
      variables: this.state.values
    });
    const { error, payload } = response.data.login;
    if (error) {
      this.setState({
        error
      });
    } else {
      login(payload.token);
      this.props.router.navigate({
        name: "Home",
        method: "REPLACE"
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <Error error={this.state.error} />
        <NamedTextField
          name="Email"
          value={this.state.values.email}
          onChange={value => { this.updateValue("email", value); }}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <NamedTextField
          name="Password"
          value={this.state.values.password}
          onChange={value => { this.updateValue("password", value); }}
          secureTextEntry={true}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <View>
          <PositiveHighlight
            onPress={this.login}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
          </PositiveHighlight>
          <Link
            to="Sign In"
            hash="signup"
            anchor={NeutralOpacity}
          >
            <Text style={styles.buttonText}>
              Need to create an account? Sign Up
            </Text>
          </Link>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default props => (
  <Mutation mutation={LOGIN_MUTATION}>
    {(login, { data }) => (
      <LoginForm {...props} login={login} loginData={data}/>
    )}
  </Mutation>
);

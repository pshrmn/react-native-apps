import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";
import { Link } from "@curi/react-native";

import NamedTextField from "./NamedTextField";
import Error from "./Error";
import { LOGIN_MUTATION } from "../gql/mutations";
import { login } from "../auth";

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
      <View>
        <Error error={this.state.error} />
        <NamedTextField
          name="Email"
          value={this.state.values.email}
          onChange={value => { this.updateValue("email", value); }}
        />
        <NamedTextField
          name="Password"
          value={this.state.values.password}
          onChange={value => { this.updateValue("password", value); }}
          secureTextEntry={true}
        />
        <View>
          <Button
            title="Login"
            onPress={this.login}
          />
          <Link
              to="Sign In"
              hash="signup"
            >
            <Text>Need to create an account? Sign Up</Text>
          </Link>
        </View>
      </View>
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

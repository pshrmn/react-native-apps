import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";
import { Link } from "@curi/react-native";

import NamedTextField from "./NamedTextField";
import Error from "./Error";
import { SIGNUP_MUTATION } from "../gql/mutations";
import { login } from "../auth";

class SignUpForm extends React.Component {
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

  signUp = async () => {
    const response = await this.props.signup({
      variables: this.state.values
    });
    const { error, payload } = response.data.signup;
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
          name="Name"
          value={this.state.values.name}
          onChange={value => {
            this.updateValue("name", value);
          }}
        />
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
            title="Sign Up"
            onPress={this.signUp}
          />
          <Link
            to="Sign In"
            hash="login"
          >
            <Text>Already have an account? Login</Text>
          </Link>
        </View>
      </View>
    )
  }
}

export default props => (
  <Mutation mutation={SIGNUP_MUTATION}>
    {(signup, { data }) => (
      <SignUpForm {...props} signup={signup} signupData={data}/>
    )}
  </Mutation>
);

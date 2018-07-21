import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";
import { Link } from "@curi/react-native";

import NamedTextField from "../NamedTextField";
import Error from "../Error";
import { SIGNUP_MUTATION } from "../../gql/mutations";
import { login } from "../../auth";

const styles = StyleSheet.create({
  textField: {
    fontSize: 30
  },
  titleField: {
    fontSize: 30
  },
  button: {
    marginVertical: 10,
    backgroundColor: "cyan",
    padding: 5
  },
  buttonText: {
    fontSize: 20
  }
});

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
    this.setState({ error: undefined });
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
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
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
          <TouchableHighlight
            onPress={this.signUp}
            underlayColor="darkcyan"
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </TouchableHighlight>
          <Link
            to="Sign In"
            hash="login"
            style={styles.button}
            underlayColor="darkcyan"
          >
            <Text style={styles.buttonText}>
              Already have an account? Login
            </Text>
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

import React from "react";
import { View, StyleSheet } from "react-native";

import SignUpForm from "../components/forms//SignUpForm";
import LoginForm from "../components/forms//LoginForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  }
});

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    // if current location has "login" hash, show login form
    // otherwise show signup form
    this.state = {
      signup: this.props.response.location.hash !== "login"
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      signup: props.response.location.hash !== "login"
    };  
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.signup
          ? <SignUpForm router={this.props.router}/>
          : <LoginForm router={this.props.router}/>
        }
      </View>
    )
  }
}
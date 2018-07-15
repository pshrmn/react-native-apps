import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

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
    console.log("[location]", this.props.response.location);
    console.log("[state]", this.state);
    return (
      <View>
        {this.state.signup
          ? <SignUpForm router={this.props.router}/>
          : <LoginForm router={this.props.router}/>
        }
      </View>
    )
  }
}
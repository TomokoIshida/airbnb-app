import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Hello Login !</Text>
      </View>
    );
  }
}

export default Login;

const styles = Stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FC5B63",
    padding: 50,
    alignItems: "center"
  }
});

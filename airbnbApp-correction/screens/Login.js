import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import axios from "axios";

class Login extends Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };

  onSubmit = () => {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;

    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email, // email: email,
        password // password: password
      })
      .then(response => {
        console.log("response", response);
        if (response) {
          navigate("Home");
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      // Wrap with ScrollView to ensure that KeyboardAvoidingView is working properly with Android
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.logoTitleView}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Welcome</Text>
          </View>
          <View style={styles.inputsView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={this.onSubmit}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(252, 65, 76)",
    padding: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 15
  },
  logoTitleView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },
  title: {
    fontSize: 35,
    color: "white"
  },
  inputsView: {
    marginBottom: 40
  },
  textInput: {
    width: 300,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white"
  },
  loginButton: {
    marginTop: 40,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50
  },
  loginButtonText: {
    fontSize: 30,
    color: "rgb(252, 65, 76)",
    textAlign: "center"
  }
});

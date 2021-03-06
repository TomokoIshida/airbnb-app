import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

class Login extends Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };
  static navigationOptions = {
    title: "LogIn",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    console.log("this.props", this.props);

    axios
      .post(
        "https://airbnb-api.now.sh/api/user/log_in",
        {
          email,
          password
          // email: this.state.email,
          // password: this.state.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log("response", response);
        if (response) {
          navigate("List");
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    console.log("this.state", this.state);
    // this.state
    // email: "arno@airbnb-api.com"
    // password: "password01"
    return (
      <KeyboardAvoidingView behavior={"padding"} style={styles.loginContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-airbnb.png")}
        />
        <Text style={styles.homeTitle}>Welcome</Text>

        <TextInput
          style={styles.inputCell}
          value={this.state.email}
          onChangeText={value => {
            this.setState({
              email: value
            });
          }}
        />
        <TextInput
          style={styles.inputCell}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={value => {
            this.setState({
              password: value
            });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          title="Go to List"
          onPress={this.handleSubmit}
        >
          <Text style={styles.textInButton} onPress={this.handleSubmit}>
            Login
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#FC5B63",
    height: "100%",
    width: "auto",
    alignItems: "center"
  },
  logo: {
    marginTop: 70,
    width: 100,
    height: 100
  },
  homeTitle: {
    marginVertical: 70,
    fontSize: 48,
    color: "white",
    fontWeight: "200"
  },
  inputCell: {
    width: 250,
    height: 60,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "white",
    color: "#FC5B63",
    height: 60,
    width: 150,
    borderRadius: 50,
    marginTop: 50,
    justifyContent: "center"
  },
  textInButton: {
    fontSize: 20,
    color: "#FC5B63",
    textAlign: "center"
  }
});

export default Login;

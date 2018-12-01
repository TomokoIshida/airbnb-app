// import React, { Component } from "react";
// import { View, Text, AsyncStorage, Button, StyleSheet } from "react-native";
// import axios from "axios";

// export default class Home extends Component {
//   state = {
//     // vérifier si l'user est authentifié
//     isAuthenticated: false,
//     email: "arno@airbnb-api.com",
//     password: "password01"
//   };

//   handleSubmit = () => {
//     const { rooms } =
//     const { email, password } = this.state;

//     axios
//       .post("https://airbnb-api.now.sh/api/user/log_in", {
//         email,
//         password
//       })
//       .then(response => {
//         if (response.data.token) {
//           AsyncStorage.setItem("token", response.data.token).then(() => {
//             // authentifier l'user
//             this.setState({
//               isAuthenticated: true
//             });
//             const { navigate } = this.props.navigation;
//             navigate("List");
//           });
//         }
//       });
//   };

//   render() {
//     return (
//       <View style={styles.welcome}>
//         <Text>Bienvenue</Text>
//         <Button
//           onPress={this.handleSubmit}
//           // this.props.navigation.navigate("List");
//           // on peut destructurer
//           // const { navigate } = this.props.navigation;
//           // navigate("List")
//           title="Go to List"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   welcome: {
//     backgroundColor: "#FC5B63",
//     color: "black",
//     flex: 1
//   }
// });

import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginContainer from "./src/screens/Login";
// import HomeContainer from "./src/screens/Home";
// import ApartmentContainer from "./src/screens/Apartment";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: null
    }
  }
  // Home: {
  //   screen: HomeContainer,
  // },
  // Apartment: { screen: ApartmentContainer }
});

export default createAppContainer(AppNavigator);

import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginContainer from "./screens/Login";
import HomeContainer from "./screens/Home";

const App = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: null
    }
  },
  Home: { screen: HomeContainer }
});

export default createAppContainer(App);

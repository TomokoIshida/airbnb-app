import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginContainer from "./src/screens/Login";
// import HomeContainer from "./src/screens/Home";
import ListContainer from "./src/screens/List";
import RoomContainer from "./src/screens/Room";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {}
  },
  // Home: {
  //   screen: HomeContainer,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  List: {
    screen: ListContainer,
    navigationOptions: {}
  },
  Room: {
    screen: RoomContainer,
    navigationOption: {
      // header: null
    }
  }
});

export default createAppContainer(AppNavigator);

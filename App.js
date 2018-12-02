import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginContainer from "./src/screens/Login";
import ListContainer from "./src/screens/List";
import RoomContainer from "./src/screens/Room";
// import RoomCardContainer from "./src/VersionRoomCard/RoomCard";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {}
  },

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
  // RoomCard: {
  //   screen: RoomCardContainer,
  //   navigationOptions: {}
  // }
});

export default createAppContainer(AppNavigator);

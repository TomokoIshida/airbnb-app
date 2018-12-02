import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import RoomCard from "../VersionRoomCard/RoomCard";

export default class List extends Component {
  state = {
    rooms: []
  };

  static navigationOptions = {
    title: "MonAirbnb",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  handleClick = item => {
    const { navigate } = this.props.navigation;
    navigate("RoomCard", {
      item
    });
  };

  render() {
    const { rooms } = this.state;
    console.log(rooms);

    return (
      <ScrollView style={styles.listContainer}>
        <StatusBar barStyle="light-content" />
        <FlatList
          keyExtractor={item => {
            // item est un appartemenmt
            return item._id;
          }}
          data={rooms}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.roomInfo}
              onPress={() => {
                this.handleClick(item);
              }}
            >
              <RoomCard
                style={styles.roomCard}
                title={item.title}
                id={item._id}
                desciption={item.description}
                photo={item.photos[0]}
                price={item.price}
                location={item.loc}
                ratingValue={item.ratingValue}
                reviews={item.reviews}
                userPhoto={item.user.account.photos[0]}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        // handle success
        // response
        // 1: {photos: Array(4), _id: "58ff73d11765a998979a3397", shortId: 2, title: "Logement entier - Gambetta, Paris", description: "Deux pi
        this.setState({ rooms: response.data.rooms });
        console.log("response", response.data.rooms);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "white",
    color: "black"
    // alignItems: "center"
    // jusityContent: "center"
  }
  // roomPhoto: {
  //   width: "100%",
  //   height: 250
  // },
});

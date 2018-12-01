import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import axios from "axios";

export default class Room extends Component {
  state = {
    room: {}
  };

  static navigationOptions = {
    title: "Room",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  // function permettant d'ajouter des étoiles jaunes correspondant à la note
  rateStars(value) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        stars.push(
          <Image
            key={i}
            source={require("../../assets/images/star-filled.png")}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            source={require("../../assets/images/star-empty.png")}
          />
        );
      }
    }
    return stars;
  }

  render() {
    console.log(this.state.room.user._id);
    // On vérifie que le this.state n'est pas vide
    if (this.state.room.user._id !== undefined) {
      return (
        <View style={styles.roomContainer}>
          <FlatList
            keyExtractor={item => {
              return item._id;
            }}
            data={this.state.room}
            renderItem={({ item }) => (
              <View style={styles.roomCard}>
                <Image
                  style={styles.roomPhoto}
                  source={{ uri: item.photos[0] }}
                />
              </View>

              /* <View style={styles.roomPriceCard}>
              <Text style={styles.roomPrice}>{item.price + " "}€</Text>
            </View>
            <View style={styles.roomRow}>
              <View style={styles.roomLeftColumn}>
                <Text style={styles.roomTitle}>{item.title}</Text>
                <View style={styles.roomEvaluation}>
                  <Text style={styles.roomRatingValue}>
                        {this.ratingStars(item.ratingValue)}</Text>
                 <Text style={styles.roomReviews}>
                        {item.reviews + " "}reviews</Text>
                </View>

              </View>
              <Image style={styles.userPhoto} source={{ uri: item.user.account.photo[0] }} />
            </View>

            <Text style={styles.roomDescription} numberOfLines={3}>
                {item.description}</Text> */
            )}
          />
        </View>
      );
    } else {
      // s'il est vide on affiche loading...
      return (
        <View style={styles.roomContainer}>
          <Text style={styles.loading}>Loading ...</Text>
        </View>
      );
    }
  }

  componentDidMount() {
    axios
      .get(
        // on appelle axios avec l'id récupérer via "navigate"
        "https://airbnb-api.now.sh/api/room/" +
          this.props.navigation.state.params.roomId
      )
      .then(response => {
        // on envoie les infos dans le state.room
        console.log(response.data);
        this.setState({
          room: response.data
        });
      });
  }
}

const styles = StyleSheet.create({
  loading: {
    color: "#FC5B63",
    fontSize: 30,
    fontWeight: "200",
    textAlign: "center"
  },
  roomContainer: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0",
    alignItems: "center"
  },
  roomPhoto: {
    width: "100%",
    height: 200
  },
  roomRow: {
    flexDirection: "row",
    flex: 1,
    marginTop: 20
  },
  roomLeftColumn: {
    flex: 4
  },
  roomCard: {
    position: "relative"
  },
  roomRightColumn: {
    flex: 1
  },
  roomPriceCard: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 90,
    height: 60,
    marginBottom: 5,
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0
  },
  roomPrice: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  roomTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  roomEvaluation: {
    flexDirection: "row",
    flex: 1
  },
  roomRatingValue: {
    flex: 1,
    marginTop: 5
  },
  roomReviews: {
    flex: 2,
    fontSize: 18,
    color: "#A0A0A0"
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
});

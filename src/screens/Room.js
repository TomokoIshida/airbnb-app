import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";
import MapView from "react-native-maps";
import axios from "axios";

export default class Room extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  state = {
    room: null
  };
  // }

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
    console.log("this.state.room", this.state.room);
    // on vérifie que le this.state n'est pas vide
    // si le this.state contient les données de l'appartement
    if (this.state.room) {
      return (
        <ScrollView style={styles.roomContainer}>
          <View style={styles.roomCard}>
            <ImageBackground
              style={styles.roomPhoto}
              source={{ uri: this.state.room.photos[0] }}
            >
              <Text style={styles.roomPriceCard}>
                <Text style={styles.roomPrice}>
                  {this.state.room.price + " "}€
                </Text>
              </Text>
            </ImageBackground>
            <View style={styles.roomRow}>
              <View style={styles.roomLeftColumn}>
                <Text style={styles.roomTitle}>{this.state.room.title}</Text>

                <View style={styles.roomEvaluation}>
                  <Text style={styles.roomRatingValue}>
                    {this.rateStars(this.state.room.ratingValue)}
                  </Text>
                  <Text style={styles.roomReviews}>
                    {this.state.room.reviews + " "}reviews
                  </Text>
                </View>
              </View>
              <View style={styles.roomRightColumn}>
                <Image
                  style={styles.userPhoto}
                  source={{ uri: this.state.room.user.account.photos[0] }}
                />
              </View>
            </View>
            <Text style={styles.roomDescription} numberOfLines={3}>
              {this.state.room.description}
            </Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: this.state.room.loc[0],
                longitude: this.state.room.loc[1],
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.state.room.loc[0],
                  longitude: this.state.room.loc[1]
                }}
              />
            </MapView>
          </View>
        </ScrollView>
      );

      // s'il est vide on affiche loading...
    } else {
      return (
        <View style={styles.roomContainer}>
          <Text style={styles.loading}>Loading ...</Text>
        </View>
      );
    }
  }

  componentDidMount() {
    // componentWillMount() {
    axios
      .get(
        // on appelle axios avec l'id récupérer via "navigate"
        "https://airbnb-api.now.sh/api/room/" +
          this.props.navigation.state.params.roomId
      )
      .then(response => {
        // on envoie les infos dans le state.room
        console.log("response.data", response.data);
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
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0"
  },
  roomPhoto: {
    width: "100%",
    height: 250
  },
  roomRow: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
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
    paddingTop: 15,
    // justifyContent: "center",
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
  },
  roomDescription: {
    fontSize: 20,
    paddingHorizontal: 20
  },
  map: {
    flex: 1,
    height: 300,
    marginVertical: 30
  }
});

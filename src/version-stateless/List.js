import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import axios from "axios";

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

  handleClick = item => {
    const { navigate } = this.props.navigation;
    navigate("Room", {
      room: item
    });
  };

  render() {
    console.log(this.state.rooms);
    // this.state.rooms
    // 0: {photos: Array(35), _id: "58ff73d11765a998979a3396", shortId: 5, title: "Eiffel Tower Luxury 90m², 2 Terraces", description: "Thi
    return (
      <ScrollView style={styles.homeContainer}>
        <FlatList
          keyExtractor={item => {
            // item est un appartemenmt
            return item._id;
          }}
          data={this.state.rooms}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.apartment}
              onPress={() => {
                // this.props.navigation.navigate("Room", item);
                this.handleClick(item);
              }}
            >
              <View style={styles.apartmentCard}>
                {/* également possible d'utiliser ImageBackground */}
                <Image
                  style={styles.apartmentPhoto}
                  source={{ uri: item.photos[0] }}
                />
                <View style={styles.apartmentPriceCard}>
                  <Text style={styles.apartmentPrice}>{item.price + " "}€</Text>
                </View>
              </View>

              <View style={styles.apartmentRow}>
                <View style={styles.apartmentLeftColumn}>
                  <Text style={styles.apartmentTitle}>{item.title}</Text>
                  <View style={styles.apartmentEvaluation}>
                    <Text style={styles.apartmentRatingValue}>
                      {this.rateStars(item.ratingValue)}
                    </Text>

                    <Text style={styles.apartmentReviews}>
                      {item.reviews + " "}reviews
                    </Text>
                  </View>
                </View>
                <View style={styles.apartmentRightColumn}>
                  <Image
                    style={styles.userPhoto}
                    source={{ uri: item.user.account.photos[0] }}
                  />
                </View>
              </View>

              {/* possible de gérer avec map */}
              {/* const list = this.state.rooms.map(element => (
    <View>
    <Text> {element.photos[0]}</Text>
    <Text>{element.price}</Text>
    <Text>{element.title}</Text>
    <Text> {element.ratingValue}</Text>
    <Text> {element.reviews}</Text>
    <Text> {element.user.account.photos[0]}</Text>
   </View>
   )); */}
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
        console.log("response", response.data.rooms);
        // response
        // 1: {photos: Array(4), _id: "58ff73d11765a998979a3397", shortId: 2, title: "Logement entier - Gambetta, Paris", description: "Deux pi
        this.setState({ rooms: response.data.rooms });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  homeContainer: {},
  // homeHeader: {
  //   height: 80,
  //   backgroundColor: "#FC5B63",
  //   justifyContent: "center",
  //   paddingTop: 30
  // },
  // homeTitle: {
  //   color: "white",
  //   fontSize: 26,
  //   textAlign: "center"
  // },
  apartment: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0"
  },
  apartmentPhoto: {
    // marginHorizontal: 20,
    width: "100%",
    height: 200
  },
  apartmentRow: {
    flexDirection: "row",
    flex: 1,
    marginTop: 20
  },
  apartmentLeftColumn: {
    flex: 4
  },
  apartmentCard: {
    position: "relative"
  },
  apartmentRightColumn: {
    flex: 1
  },
  apartmentPriceCard: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 90,
    height: 60,
    marginBottom: 5,
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0
  },
  apartmentPrice: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  apartmentTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  apartmentEvaluation: {
    flexDirection: "row",
    flex: 1
  },
  apartmentRatingValue: {
    flex: 1,
    marginTop: 5
  },
  apartmentReviews: {
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

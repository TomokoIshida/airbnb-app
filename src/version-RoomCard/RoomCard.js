import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

// import MapView from "react-native-maps";

export default class RoomCard extends Component {
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

  static propTypes = {
    title: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.number,
    ratingValue: PropTypes.number,
    reviews: PropTypes.number,
    userPhoto: PropTypes.string,
    description: PropTypes.string
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
    const {
      title,
      photo,
      price,
      ratingValue,
      reviews,
      userPhoto,
      description
    } = this.props;

    return (
      <View style={styles.roomCardContainer}>
        <ImageBackground style={styles.roomPhoto} source={{ uri: photo }}>
          <Text style={styles.roomPrice}>{price + " "}€</Text>
        </ImageBackground>
        <View style={styles.roomRow}>
          <View style={styles.roomLeftColumn}>
            <Text style={styles.roomTitle}>{title}</Text>
            <View style={styles.roomEvaluation}>
              <Text style={styles.roomRatingValue}>
                {this.rateStars(ratingValue)}
              </Text>
              <Text style={styles.roomReviews}>{reviews + " "}reviews</Text>
            </View>
          </View>
          <View style={styles.roomRightColumn}>
            <Image style={styles.userPhoto} source={{ uri: userPhoto }} />
          </View>
        </View>
        <Text style={styles.roomDescription} numberOfLines={3}>
          {description}
        </Text>

        {/* <MapView
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
        </MapView>{" "} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roomCardContainer: {
    backgroundColor: "grey",
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  roomPhoto: {
    width: "100%",
    height: 200
  },
  roomRow: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0"
  },
  roomLeftColumn: {
    flex: 4
  },
  roomRightColumn: {
    flex: 1
  },
  roomPrice: {
    color: "white",
    fontSize: 24,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 90,
    height: 60,
    marginBottom: 5,
    paddingTop: 15,
    position: "absolute",
    bottom: 10,
    left: 0,
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
  }
});

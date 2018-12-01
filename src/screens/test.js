state = {
    rooms: []
}

ComponentDidMount() {
    axios
    .get("...")
    .then(response =>
        
        )
}

rateStars(value) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        stars.push(
          <Image key={i} source={require("../../assets/star-filled.png")} />
        );
      } else {
        stars.push(
          <Image key={i} source={require("../../assets/star-empty.png")} />
        );
      }
      return stars;
    }
  }
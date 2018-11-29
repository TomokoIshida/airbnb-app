<form
onSubmit={event => {
  event.preventDefault();

  axios
    .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response.data);
      this.props.logIn(
        response.data._id,
        response.data.account.username,
        response.data.token
      );

      // Faire de la navigation en "programmatic"
      // this.props.history est transmis par
      this.props.history.push("/");